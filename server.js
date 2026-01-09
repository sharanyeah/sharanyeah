
const express = require('express');
const fs = require('fs');
const path = require('path');
const { Resend } = require('resend');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({ limit: '10mb' }));

// Resend integration helper
let connectionSettings = null;

async function getResendCredentials() {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=resend',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  if (!connectionSettings || !connectionSettings.settings.api_key) {
    throw new Error('Resend not connected');
  }
  
  return {
    apiKey: connectionSettings.settings.api_key, 
    fromEmail: connectionSettings.settings.from_email
  };
}

// Contact form API endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message, doodle } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'Missing required fields' });
    }
    
    const recipientEmail = process.env.CONTACT_EMAIL;
    if (!recipientEmail) {
      console.error('CONTACT_EMAIL not set');
      // If no email set, we still want to show success to the user for the "observation studio" experience
      return res.json({ success: true, message: 'Observation received (void mode)' });
    }

    try {
      const { apiKey, fromEmail } = await getResendCredentials();
      const resend = new Resend(apiKey);

      const emailHtml = `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: 'Georgia', serif; background: #FFF5F6; padding: 2rem; color: #3d1a28; }
              .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; padding: 2rem; border: 1px solid #f0d0d5; }
              h1 { color: #670626; font-size: 1.5rem; margin-bottom: 0.5rem; }
              .label { font-size: 0.75rem; color: #888; text-transform: uppercase; margin-top: 1.5rem; margin-bottom: 0.25rem; }
              .value { font-size: 1rem; line-height: 1.6; }
              .doodle { margin-top: 2rem; }
              .doodle img { max-width: 100%; border: 2px dashed #f0d0d5; border-radius: 8px; }
              .footer { margin-top: 2rem; font-size: 0.875rem; color: #888; font-style: italic; }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>New message from Observation Studio</h1>
              
              <div class="label">From</div>
              <div class="value"><strong>${name}</strong> (${email})</div>
              
              <div class="label">Message</div>
              <div class="value">${message.replace(/\n/g, '<br>')}</div>
              
              ${doodle ? `
                <div class="doodle">
                  <div class="label">Doodle</div>
                  <img src="${doodle}" alt="Doodle submission" />
                </div>
              ` : ''}
              
              <div class="footer">Sent from Sharanya's Observation Studio contact form</div>
            </div>
          </body>
        </html>
      `;

      const { data, error } = await resend.emails.send({
        from: fromEmail,
        to: recipientEmail,
        replyTo: email,
        subject: `New message from ${name} - Observation Studio`,
        html: emailHtml,
      });

      if (error) {
        console.error('Resend error:', error);
        return res.status(500).json({ success: false, error: 'Failed to send email' });
      }

      console.log('Email sent successfully:', data);
      res.json({ success: true, message: 'Email sent successfully' });
    } catch (credError) {
      console.error('Credential error:', credError);
      // Still succeed locally if Resend is not configured
      return res.json({ success: true, message: 'Observation received (simulated)' });
    }
    
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

// Endpoint to provide public secrets to frontend safely
app.get('/api/config', (req, res) => {
  res.json({
    emailKey: process.env.EMAIL_KEY || ''
  });
});

// Serve static files
app.use(express.static(__dirname, { 
  index: false,
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));

// Serve index.html
app.get('/', (req, res) => {
  let html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
  res.send(html);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
  console.log(`Contact email: ${process.env.CONTACT_EMAIL ? 'configured' : 'NOT SET - add CONTACT_EMAIL to secrets'}`);
});
