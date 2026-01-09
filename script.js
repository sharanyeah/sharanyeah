abt

// Import data from separate files
import { specWork } from './data/specWork.js';
import { blogs } from './data/blogs.js';

// Data - Skills organized by category
const skillCategories = {
  writing: [
    { name: "content writing", annotation: "my bread and butter" },
    { name: "copywriting", annotation: null },
    { name: "ux writing", annotation: "words that guide" },
    { name: "brand voice", annotation: null },
    { name: "storytelling", annotation: "my favorite part" },
    { name: "microcopy", annotation: null },
  ],
  tools: [
    { name: "notion", annotation: "my second brain" },
    { name: "figma", annotation: null },
    { name: "canva", annotation: null },
    { name: "google analytics", annotation: null },
    { name: "hotjar", annotation: "watching behavior" },
    { name: "ahrefs", annotation: null },
    { name: "mailchimp", annotation: null },
    { name: "hubspot", annotation: null },
  ],
  strategy: [
    { name: "content strategy", annotation: null },
    { name: "seo & organic growth", annotation: "obsessed" },
    { name: "conversion optimization", annotation: null },
    { name: "a/b testing", annotation: null },
    { name: "competitor analysis", annotation: null },
    { name: "campaign planning", annotation: null },
  ],
  behavior: [
    { name: "user research", annotation: "endless rabbit holes" },
    { name: "audience psychology", annotation: null },
    { name: "behavior analysis", annotation: null },
    { name: "empathy mapping", annotation: null },
    { name: "journey mapping", annotation: null },
  ],
};

const socials = [
  { name: "Substack", href: "#", icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v16H4z"/><path d="M4 12h16"/><path d="M4 8h16"/></svg>' },
  { name: "Email", href: "mailto:hello@sharanya.studio", icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7L12 13L2 7"/></svg>' },
  { name: "Instagram", href: "#", icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="18" cy="6" r="1"/></svg>' },
  { name: "LinkedIn", href: "#", icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>' },
];

const funnyPrompts = [
  "draw your monday mood",
  "doodle your last braincell",
  "sketch your coffee dependency",
  "illustrate your wifi connection",
  "draw your attention span",
  "doodle your sleep schedule",
  "sketch your zoom fatigue",
  "visualize your inbox anxiety",
  "draw how you think you look vs reality",
  "illustrate your career trajectory",
  "sketch your weekend plans vs reality",
  "doodle your creative process",
];

const observations = [
  "attention noted.",
  "you read more than most people.",
  "continuing...",
  "patterns: found.",
  "context is everything.",
  "note to self: revise later.",
];

const colors = [
  { value: "#1a1a1a", name: "black" },
  { value: "#670626", name: "maroon" },
  { value: "#FFBDC5", name: "pink" },
  { value: "#FFD93D", name: "yellow" },
  { value: "#6BCB77", name: "green" },
];

// State
let mobileMenuOpen = false;
let dotClicks = 0;
let enhancedMode = false;
let currentTool = "brush";
let currentColor = "#1a1a1a";
let brushSize = 3;
let annotationMode = false;
let isDrawing = false;
let lastTrigger = 0;
let currentDetailType = null;
let currentDetailId = null;

// Slug generation helper
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// DOM Elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
const logoDot = document.getElementById('logoDot');
const logoSecret = document.getElementById('logoSecret');
const writingSkillsGrid = document.getElementById('writingSkills');
const toolsSkillsGrid = document.getElementById('toolsSkills');
const strategySkillsGrid = document.getElementById('strategySkills');
const behaviorSkillsGrid = document.getElementById('behaviorSkills');
const specWorkGrid = document.getElementById('specWorkGrid');
const blogsGrid = document.getElementById('blogsGrid');
const socialLinks = document.getElementById('socialLinks');
const contactForm = document.getElementById('contactForm');
const doodleCanvas = document.getElementById('doodleCanvas');
const doodlePrompt = document.getElementById('doodlePrompt');
const newPromptBtn = document.getElementById('newPromptBtn');
const modeToggle = document.getElementById('modeToggle');
const highlighterBtn = document.getElementById('highlighterBtn');
const clearBtn = document.getElementById('clearBtn');
const colorButtons = document.getElementById('colorButtons');
const brushSizeInput = document.getElementById('brushSize');
const scrollObserver = document.getElementById('scrollObserver');
const observerText = document.getElementById('observerText');
const highlightDetector = document.getElementById('highlightDetector');
const enhancedOverlay = document.getElementById('enhancedOverlay');
const enhancedHint = document.getElementById('enhancedHint');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const currentYear = document.getElementById('currentYear');
const footerTagline = document.getElementById('footerTagline');
const footerSecret = document.getElementById('footerSecret');
const footerStatus = document.getElementById('footerStatus');

// Footer easter eggs
const footerTaglines = [
  "you scrolled all the way down here. impressive.",
  "congrats, you found the footer.",
  "footer level: expert scroller.",
  "still here? i like your commitment.",
  "the footer is just the beginning (jk, you're done).",
  "if you read this, you're legally obligated to say hi.",
];

const footerStatuses = [
  "overthinking everything",
  "caffeinated & curious",
  "observing your scroll behavior",
  "probably editing this right now",
  "wondering if anyone reads footers",
  "taking notes on you taking notes",
];

const footerCurrently = [
  "overthinking everything",
  "writing something new",
  "procrastinating productively",
  "reorganizing notion",
  "staring at a blank page",
  "editing the same sentence",
  "researching rabbit holes",
  "questioning my choices",
  "making more coffee",
  "drafting ideas",
];

const footerMoods = [
  "caffeinated chaos",
  "peaceful procrastination",
  "productive panic",
  "creative confusion",
  "optimistic overthinking",
  "chill but stressed",
];

const footerListening = [
  "probably sad songs",
  "lo-fi beats to overthink to",
  "the same playlist on repeat",
  "podcast about human behavior",
  "silence (finally)",
  "ambient noise from a cafe",
];

const footerReading = [
  "too many tabs at once",
  "that book i started months ago",
  "random wikipedia articles",
  "substack newsletters",
  "my own draft for typos",
  "the comments section (bad idea)",
];

let footerClicks = 0;

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
  currentYear.textContent = new Date().getFullYear();
  
  // Fetch config and update form action
  try {
    const response = await fetch('/api/config');
    const config = await response.json();
    const contactForm = document.getElementById('contactForm');
    if (contactForm && config.emailKey) {
      contactForm.action = `https://formspree.io/f/${config.emailKey}`;
    }
  } catch (err) {
    console.error('Failed to load config:', err);
  }
  
  renderSkills();
  renderSpecWork();
  renderBlogs();
  renderSocials();
  initEventListeners();
  
  // Handle URL routing on page load
  handleRouteOnLoad();
});

// Handle URL routing
function handleRouteOnLoad() {
  const hash = window.location.hash;
  
  if (hash === '#/spec-work') {
    setTimeout(() => openSpecWorkPage(), 100);
  } else if (hash === '#/blogs') {
    setTimeout(() => openBlogsPage(), 100);
  } else if (hash.startsWith('#/spec/')) {
    const slug = hash.replace('#/spec/', '');
    const item = specWork.find(w => generateSlug(w.title) === slug);
    if (item) {
      setTimeout(() => openSpecWorkDetail(item.id), 100);
    }
  } else if (hash.startsWith('#/blog/')) {
    const slug = hash.replace('#/blog/', '');
    const item = blogs.find(b => generateSlug(b.title) === slug);
    if (item) {
      setTimeout(() => openBlogDetail(item.id), 100);
    }
  } else if (hash === '#/about') {
    setTimeout(() => openAboutMePage(), 100);
  }
}

// Listen for hash changes
window.addEventListener('hashchange', () => {
  const hash = window.location.hash;
  
  // Close any open pages first
  const detailPage = document.getElementById('detailPage');
  const aboutMePage = document.getElementById('aboutMePage');
  const specWorkPage = document.getElementById('specWorkPage');
  const blogsPage = document.getElementById('blogsPage');
  
  if (hash === '' || hash === '#' || hash.startsWith('#home') || hash.startsWith('#about') && !hash.startsWith('#/about') || hash.startsWith('#skills') || hash.startsWith('#work') || hash.startsWith('#contact')) {
    if (detailPage) detailPage.remove();
    if (aboutMePage) aboutMePage.remove();
    if (specWorkPage) specWorkPage.remove();
    if (blogsPage) blogsPage.remove();
    document.querySelector('main').style.display = 'block';
    document.querySelector('.footer').style.display = 'block';
    return;
  }
  
  handleRouteOnLoad();
});

// Render functions
function renderSkillCategory(container, skills) {
  if (!container) return;
  container.innerHTML = skills.map((skill) => `
    <div class="skill-tag">
      ${skill.name}
      ${skill.annotation ? `<span class="skill-annotation">${skill.annotation}</span>` : ''}
    </div>
  `).join('');
}

function renderSkills() {
  renderSkillCategory(writingSkillsGrid, skillCategories.writing);
  renderSkillCategory(toolsSkillsGrid, skillCategories.tools);
  renderSkillCategory(strategySkillsGrid, skillCategories.strategy);
  renderSkillCategory(behaviorSkillsGrid, skillCategories.behavior);
}

function renderSpecWork() {
  specWorkGrid.innerHTML = specWork.map(item => `
    <article class="work-card" onclick="openSpecWorkDetail(${item.id})" data-testid="card-spec-work-${item.id}">
      <span class="work-card-label">${item.caseFile}</span>
      <h3 class="work-card-title">${item.title}</h3>
      <p class="work-card-summary">${item.summary}</p>
      <div class="work-card-tags">
        ${item.tags.map(tag => `<span class="work-card-tag">${tag}</span>`).join('')}
      </div>
      <span class="work-card-link">
        view case study
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
      </span>
      <span class="work-card-hint">click to see the full breakdown.</span>
    </article>
  `).join('');
}

function renderBlogs(showAll = false) {
  const blogsToShow = showAll ? blogs : blogs.slice(0, 6);
  blogsGrid.innerHTML = blogsToShow.map(item => `
    <article class="work-card blog-card" onclick="openBlogDetail(${item.id})" data-testid="card-blog-${item.id}">
      <div class="blog-card-meta">
        <span class="blog-card-date">${item.date}</span>
        <span class="blog-card-time">${item.readTime}</span>
      </div>
      <h3 class="blog-card-title">${item.title}</h3>
      <p class="blog-card-preview">${item.preview}</p>
      <div class="work-card-tags">
        ${item.tags.map(tag => `<span class="work-card-tag">${tag}</span>`).join('')}
      </div>
      <div class="blog-card-arrow">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
      </div>
    </article>
  `).join('');
}

function renderSocials() {
  // Social links are now rendered statically in HTML
  // This function is kept for backward compatibility
  if (!socialLinks) return;
}

// Event listeners
function initEventListeners() {
  // Mobile menu
  mobileMenuBtn.addEventListener('click', toggleMobileMenu);
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuOpen = false;
      updateMobileMenu();
    });
  });

  // Logo dot easter egg
  logoDot.addEventListener('click', handleDotClick);

  // Footer easter eggs
  if (footerTagline) {
    footerTagline.addEventListener('click', () => {
      footerTagline.textContent = footerTaglines[Math.floor(Math.random() * footerTaglines.length)];
    });
  }

  // Footer dynamic content
  const footerMoodEl = document.getElementById('footerMood');
  const footerListeningEl = document.getElementById('footerListening');
  const footerReadingEl = document.getElementById('footerReading');
  
  if (footerStatus) {
    setInterval(() => {
      footerStatus.textContent = footerStatuses[Math.floor(Math.random() * footerStatuses.length)];
    }, 8000);
  }
  
  if (footerMoodEl) {
    setInterval(() => {
      footerMoodEl.textContent = footerMoods[Math.floor(Math.random() * footerMoods.length)];
    }, 10000);
  }
  
  if (footerListeningEl) {
    setInterval(() => {
      footerListeningEl.textContent = footerListening[Math.floor(Math.random() * footerListening.length)];
    }, 12000);
  }
  
  if (footerReadingEl) {
    setInterval(() => {
      footerReadingEl.textContent = footerReading[Math.floor(Math.random() * footerReading.length)];
    }, 14000);
  }
  
  const footerCurrentlyEl = document.getElementById('footerCurrently');
  if (footerCurrentlyEl) {
    setInterval(() => {
      footerCurrentlyEl.classList.add('fade-out');
      setTimeout(() => {
        footerCurrentlyEl.textContent = footerCurrently[Math.floor(Math.random() * footerCurrently.length)];
        footerCurrentlyEl.classList.remove('fade-out');
      }, 300);
    }, 4000);
  }

  const footerLogoEl = document.querySelector('.footer-logo');
  if (footerLogoEl) {
    footerLogoEl.addEventListener('click', () => {
      footerClicks++;
      if (footerClicks >= 5 && footerSecret) {
        footerSecret.classList.remove('hidden');
        setTimeout(() => {
          footerSecret.classList.add('hidden');
          footerClicks = 0;
        }, 4000);
      }
    });
  }

  // Enhanced mode
  document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'm') {
      enhancedMode = !enhancedMode;
      enhancedOverlay.classList.toggle('hidden', !enhancedMode);
      enhancedHint.classList.toggle('hidden', !enhancedMode);
    }
  });

  // Contact form
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <span class="flex items-center gap-2">
        beaming observation...
        <svg class="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
      </span>
    `;
    
    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        // Show success state
        contactForm.innerHTML = `
          <div class="form-success show">
            <div class="success-icon">✨</div>
            <h3 class="form-success-title">observation received.</h3>
            <p class="form-success-message">your message has successfully drifted through the digital void and landed safely in my inbox. i'll decode it and get back to you soon.</p>
            <div class="success-footer">
              <button onclick="window.location.reload()" class="btn-primary-fun">send another one?</button>
              <p class="font-handwritten text-maroon" style="margin-top: 1rem;">— s.</p>
            </div>
          </div>
        `;
        showObservation("message received. talk soon.");
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      showObservation("transmission error. try again?");
    }
  });

  // Scroll observer
  window.addEventListener('scroll', handleScroll);

  // Highlight detector
  document.addEventListener('mouseup', handleHighlight);

  // Random observation bubble
  setInterval(() => {
    showObservation(observations[Math.floor(Math.random() * observations.length)]);
  }, 45000);

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

function toggleMobileMenu() {
  mobileMenuOpen = !mobileMenuOpen;
  updateMobileMenu();
}

function updateMobileMenu() {
  mobileNav.classList.toggle('hidden', !mobileMenuOpen);
  mobileMenuBtn.classList.toggle('open', mobileMenuOpen);
  menuIcon.style.display = mobileMenuOpen ? 'none' : 'block';
  closeIcon.style.display = mobileMenuOpen ? 'block' : 'none';
  closeIcon.classList.toggle('hidden', !mobileMenuOpen);
}

function handleDotClick() {
  dotClicks++;
  if (dotClicks >= 4) {
    logoSecret.classList.remove('hidden');
    setTimeout(() => {
      logoSecret.classList.add('hidden');
      dotClicks = 0;
    }, 3000);
  }
}

// FAQ toggle function - make it globally accessible
window.toggleFaq = function(element) {
  const faqItem = element.parentElement;
  const isOpen = faqItem.classList.contains('open');
  
  // Close all other FAQ items
  document.querySelectorAll('.faq-item.open').forEach(item => {
    if (item !== faqItem) {
      item.classList.remove('open');
    }
  });
  
  // Toggle current item
  faqItem.classList.toggle('open', !isOpen);
}

// About Me page function - make it globally accessible
window.openAboutMePage = function() {
  document.querySelector('main').style.display = 'none';
  document.querySelector('.footer').style.display = 'none';
  
  // Update URL
  history.pushState(null, '', '/about');
  
  const aboutMePage = document.createElement('div');
  aboutMePage.id = 'aboutMePage';
  aboutMePage.className = 'about-me-page';
  
  aboutMePage.innerHTML = `
    <div class="about-me-content">
      <div class="about-me-header">
        <div>
          <h1 class="about-me-title">the full story</h1>
          <p class="about-me-subtitle">everything you wanted to know (and probably didn't)</p>
        </div>
        <button class="about-me-close" onclick="closeAboutMePage()">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          back to main
        </button>
      </div>
      
      <div class="about-me-section">
        <h3>who i am</h3>
        <p>hi again. i'm sharanya — a curious soul who finds magic in the mundane. i'm the kind of person who reads between the lines, overthinks restaurant menus, and notices the tiny details everyone else scrolls past.</p>
        <p>i believe observation is a superpower. the world is constantly telling us stories — through behaviors, patterns, and the small moments most people miss. i've made it my mission to catch those stories and turn them into something meaningful.</p>
        
        <div class="education-inline">
          <span class="education-inline-label">the paper trail:</span>
          <div class="education-timeline">
            <div class="education-item">
              <span class="education-year">2020 - 2024</span>
              <div class="education-content">
                <h4 class="education-degree">Bachelor's in Psychology & Communication</h4>
                <p class="education-school">where i learned to ask "why?" professionally</p>
                <p class="education-note">focused on human behavior, digital media, and the art of overthinking</p>
              </div>
            </div>
            <div class="education-item">
              <span class="education-year">2019</span>
              <div class="education-content">
                <h4 class="education-degree">High School Diploma</h4>
                <p class="education-school">where it all began</p>
                <p class="education-note">first discovered my love for writing and observing patterns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="about-me-section">
        <h3>what drives me</h3>
        <p>i'm fascinated by the intersection of psychology, behavior, and communication. why do people do what they do? what makes something resonate? how do words shape experiences?</p>
        <p>these questions keep me up at night (in a good way). they're also what fuel everything i create — from writing that connects to experiments that (sometimes) work.</p>
      </div>
      
      <div class="about-me-section">
        <h3>the not-so-professional stuff</h3>
        <ul class="about-me-list">
          <li>i have an unhealthy relationship with coffee</li>
          <li>my spotify wrapped is always embarrassingly eclectic</li>
          <li>i screenshot everything interesting (my camera roll is 80% screenshots)</li>
          <li>i talk to myself when working through problems</li>
          <li>i believe 3am is when the best ideas happen</li>
          <li>i've started more notebooks than i've finished</li>
        </ul>
      </div>
      
      <div class="about-me-section">
        <h3>currently</h3>
        <p>right now, i'm exploring the world of content, psychology, and human behavior. building experiments (like this website), writing on substack, and constantly learning. also probably reorganizing my notion workspace for the 47th time.</p>
      </div>
      
      <div class="about-me-section">
        <h3>the philosophy</h3>
        <p>i believe in showing up as yourself — messy, curious, and always in progress. perfection is overrated; authenticity isn't. this website, my work, my words — they're all drafts. always evolving, always questioning, always observing.</p>
        <p>if you've made it this far, you're probably my kind of person. say hi sometime.</p>
      </div>
      
      <div style="margin-top: 3rem; text-align: center;">
        <button class="btn-primary" onclick="closeAboutMePage()" data-testid="button-back-main">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          back to the studio
        </button>
      </div>
    </div>
  `;
  
  document.body.appendChild(aboutMePage);
  window.scrollTo(0, 0);
}

window.closeAboutMePage = function() {
  const aboutMePage = document.getElementById('aboutMePage');
  if (aboutMePage) {
    aboutMePage.remove();
  }
  document.querySelector('main').style.display = 'block';
  document.querySelector('.footer').style.display = 'block';
  
  // Reset URL
  history.pushState(null, '', '#about');
  
  // Scroll to about section
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Spec Work Full Page - shows all case studies
window.openSpecWorkPage = function() {
  document.querySelector('main').style.display = 'none';
  document.querySelector('.footer').style.display = 'none';
  
  // Update URL
  history.pushState(null, '', '#/spec-work');
  
  const specWorkPage = document.createElement('div');
  specWorkPage.id = 'specWorkPage';
  specWorkPage.className = 'spec-work-page';
  
  specWorkPage.innerHTML = `
    <div class="spec-work-page-content">
      <div class="spec-work-page-header">
        <button class="detail-back-btn" onclick="closeSpecWorkPage()" data-testid="button-back-spec">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          back to main
        </button>
        <h1 class="spec-work-page-title">the case files</h1>
        <p class="spec-work-page-subtitle">where curiosity meets methodology</p>
        <p class="spec-work-page-intro">
          these are my experiments in understanding human behavior, content psychology, and the invisible mechanics of attention. 
          each case study started with a question that wouldn't leave me alone. i tracked data, found patterns, broke things apart, 
          and rebuilt my understanding of why things work (or don't). click any card to dive deeper into the findings.
        </p>
      </div>
      
      <div class="spec-work-full-grid">
        ${specWork.map(item => `
          <article class="work-card" onclick="openSpecWorkDetail(${item.id})" data-testid="card-spec-work-page-${item.id}">
            <span class="work-card-label">${item.caseFile}</span>
            <h3 class="work-card-title">${item.title}</h3>
            <p class="work-card-summary">${item.summary}</p>
            <div class="work-card-tags">
              ${item.tags.map(tag => `<span class="work-card-tag">${tag}</span>`).join('')}
            </div>
            <span class="work-card-link">
              view case study
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
            </span>
            <span class="work-card-hint">click to see the full breakdown.</span>
          </article>
        `).join('')}
      </div>
    </div>
  `;
  
  document.body.appendChild(specWorkPage);
  window.scrollTo(0, 0);
}

window.closeSpecWorkPage = function() {
  const specWorkPage = document.getElementById('specWorkPage');
  if (specWorkPage) {
    specWorkPage.remove();
  }
  document.querySelector('main').style.display = 'block';
  document.querySelector('.footer').style.display = 'block';
  
  // Reset URL
  history.pushState(null, '', '#work');
  
  // Scroll to work section
  const workSection = document.getElementById('work');
  if (workSection) {
    workSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Detail page functions - make them globally accessible
window.openSpecWorkDetail = function(id) {
  const item = specWork.find(w => w.id === id);
  if (!item) return;

  currentDetailType = 'spec';
  currentDetailId = id;

  // Update URL with slug
  const slug = generateSlug(item.title);
  history.pushState(null, '', `/spec/${slug}`);

  showDetailPage(item, 'spec');
}

window.openBlogDetail = function(id) {
  const item = blogs.find(b => b.id === id);
  if (!item) return;

  currentDetailType = 'blog';
  currentDetailId = id;

  // Update URL with slug
  const slug = generateSlug(item.title);
  history.pushState(null, '', `/blog/${slug}`);

  showDetailPage(item, 'blog');
}

function showDetailPage(item, type) {
  // Hide main content
  document.querySelector('main').style.display = 'none';
  document.querySelector('.footer').style.display = 'none';
  
  // Create detail page
  const detailPage = document.createElement('div');
  detailPage.id = 'detailPage';
  detailPage.className = 'detail-page';
  
  if (type === 'spec') {
    detailPage.innerHTML = `
      <div class="section-container detail-page-content">
        <p class="detail-case-file">${item.caseFile}</p>
        <h1 class="detail-title">${item.title}</h1>
        <div class="work-card-tags">
          ${item.tags.map(tag => `<span class="work-card-tag">${tag}</span>`).join('')}
        </div>
        ${item.image ? `<img src="${item.image}" alt="${item.title}" />` : ''}
        <p class="detail-description">${item.fullDescription}</p>
        <div class="detail-findings">
          <h3>key findings</h3>
          <ul>
            ${item.findings.map(f => `<li>${f}</li>`).join('')}
          </ul>
        </div>
        <div class="detail-takeaway">
          <p class="detail-takeaway-label">the takeaway:</p>
          <p>${item.takeaway}</p>
        </div>
        <div class="detail-bottom-actions">
          <button class="detail-back-btn" onclick="closeDetailPage()">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            back to all work
          </button>
        </div>
      </div>
    `;
  } else {
    detailPage.innerHTML = `
      <div class="section-container detail-page-content">
        <div class="detail-meta">
          <span class="detail-date">${item.date}</span>
          <span class="detail-time">${item.readTime}</span>
        </div>
        <h1 class="detail-title">${item.title}</h1>
        <div class="work-card-tags">
          ${item.tags.map(tag => `<span class="work-card-tag">${tag}</span>`).join('')}
        </div>
        ${item.image ? `<img src="${item.image}" alt="${item.title}" />` : ''}
        <div class="detail-content">
          ${item.fullContent || `<div class="detail-placeholder"><p>[ full piece coming soon — still wrestling with the words ]</p></div>`}
        </div>
        <p class="detail-takeaway-label" style="margin-top: 2rem;">— as always, thinking aloud.</p>
        <div class="detail-bottom-actions">
          <button class="detail-back-btn" onclick="closeDetailPage()">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            back to blogs
          </button>
        </div>
      </div>
    `;
  }
  
  document.body.appendChild(detailPage);
  window.scrollTo(0, 0);
}

window.closeDetailPage = function() {
  const detailPage = document.getElementById('detailPage');
  if (detailPage) {
    detailPage.remove();
  }
  document.querySelector('main').style.display = 'block';
  document.querySelector('.footer').style.display = 'block';
  currentDetailType = null;
  currentDetailId = null;
  
  // Reset URL
  history.pushState(null, '', '#work');
  
  // Scroll to work section
  const workSection = document.getElementById('work');
  if (workSection) {
    workSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Blogs Full Page - shows all blog posts
window.openBlogsPage = function() {
  document.querySelector('main').style.display = 'none';
  document.querySelector('.footer').style.display = 'none';
  
  // Update URL
  history.pushState(null, '', '#/blogs');
  
  const blogsPage = document.createElement('div');
  blogsPage.id = 'blogsPage';
  blogsPage.className = 'spec-work-page';
  
  blogsPage.innerHTML = `
    <div class="spec-work-page-content">
      <div class="spec-work-page-header">
        <button class="detail-back-btn" onclick="closeBlogsPage()" data-testid="button-back-blogs">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          back to main
        </button>
        <h1 class="spec-work-page-title">all thoughts</h1>
        <p class="spec-work-page-subtitle">— notes, essays, observations.</p>
        <p class="spec-work-page-intro">
          these are my observations written down. thoughts on reading patterns, brand voice, content strategy, 
          and the small mechanics of language that make communication work (or not). click any post to read the full piece.
        </p>
      </div>
      
      <div class="spec-work-full-grid">
        ${blogs.map(item => `
          <article class="work-card blog-card" onclick="openBlogDetail(${item.id})" data-testid="card-blog-page-${item.id}">
            <div class="blog-card-meta">
              <span class="blog-card-date">${item.date}</span>
              <span class="blog-card-time">${item.readTime}</span>
            </div>
            <h3 class="blog-card-title">${item.title}</h3>
            <p class="blog-card-preview">${item.preview}</p>
            <div class="work-card-tags">
              ${item.tags.map(tag => `<span class="work-card-tag">${tag}</span>`).join('')}
            </div>
            <div class="blog-card-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  `;
  
  document.body.appendChild(blogsPage);
  window.scrollTo(0, 0);
}

window.closeBlogsPage = function() {
  const blogsPage = document.getElementById('blogsPage');
  if (blogsPage) {
    blogsPage.remove();
  }
  document.querySelector('main').style.display = 'block';
  document.querySelector('.footer').style.display = 'block';
  
  // Reset URL
  history.pushState(null, '', '#work');
  
  // Scroll to work section
  const workSection = document.getElementById('work');
  if (workSection) {
    workSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function navigateDetail(direction) {
  if (!currentDetailType || !currentDetailId) return;

  const items = currentDetailType === 'spec' ? specWork : blogs;
  const currentIndex = items.findIndex(item => item.id === currentDetailId);
  
  let newIndex;
  if (direction === 'prev' && currentIndex > 0) {
    newIndex = currentIndex - 1;
  } else if (direction === 'next' && currentIndex < items.length - 1) {
    newIndex = currentIndex + 1;
  } else {
    return;
  }

  closeDetailPage();
  
  setTimeout(() => {
    if (currentDetailType === 'spec') {
      openSpecWorkDetail(items[newIndex].id);
    } else {
      openBlogDetail(items[newIndex].id);
    }
  }, 50);
}

// Doodle canvas
let ctx;

function initDoodleCanvas() {
  ctx = doodleCanvas.getContext('2d');
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
}

function resizeCanvas() {
  const rect = doodleCanvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  doodleCanvas.width = rect.width * dpr;
  doodleCanvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);
  
  ctx.fillStyle = annotationMode ? "#FFF9F9" : "#FFFAFA";
  ctx.fillRect(0, 0, rect.width, rect.height);
  drawBackground();
}

function drawBackground() {
  if (annotationMode) {
    const rect = doodleCanvas.getBoundingClientRect();
    ctx.strokeStyle = "rgba(103, 6, 38, 0.1)";
    ctx.lineWidth = 1;
    for (let y = 30; y < rect.height; y += 30) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(rect.width, y);
      ctx.stroke();
    }
  }
}

function getCoordinates(e) {
  const rect = doodleCanvas.getBoundingClientRect();
  if (e.touches) {
    return {
      x: e.touches[0].clientX - rect.left,
      y: e.touches[0].clientY - rect.top
    };
  }
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
}

function startDrawing(e) {
  e.preventDefault();
  isDrawing = true;
  const { x, y } = getCoordinates(e);
  ctx.beginPath();
  ctx.moveTo(x, y);
}

function draw(e) {
  e.preventDefault();
  if (!isDrawing) return;

  const { x, y } = getCoordinates(e);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  if (currentTool === "eraser") {
    ctx.strokeStyle = annotationMode ? "#FFF9F9" : "#FFFAFA";
    ctx.lineWidth = brushSize * 3;
  } else if (currentTool === "highlighter") {
    ctx.strokeStyle = currentColor + "40";
    ctx.lineWidth = brushSize * 4;
  } else {
    ctx.strokeStyle = currentColor;
    ctx.lineWidth = brushSize;
  }

  ctx.lineTo(x, y);
  ctx.stroke();
}

function stopDrawing() {
  isDrawing = false;
}

function clearCanvas() {
  const rect = doodleCanvas.getBoundingClientRect();
  ctx.fillStyle = annotationMode ? "#FFF9F9" : "#FFFAFA";
  ctx.fillRect(0, 0, rect.width, rect.height);
  drawBackground();
  setRandomPrompt();
}

function setRandomPrompt() {
  const prompt = annotationMode 
    ? "pretend this is a book you're arguing with." 
    : funnyPrompts[Math.floor(Math.random() * funnyPrompts.length)];
  doodlePrompt.textContent = prompt;
}

function toggleAnnotationMode() {
  annotationMode = !annotationMode;
  modeToggle.textContent = annotationMode ? "annotation" : "freehand";
  modeToggle.classList.toggle('active', annotationMode);
  highlighterBtn.classList.toggle('hidden', !annotationMode);
  resizeCanvas();
  setRandomPrompt();
}

function selectTool(tool) {
  currentTool = tool;
  document.querySelectorAll('.tool-btn[data-tool]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tool === tool);
  });
}

function selectColor(color) {
  currentColor = color;
  document.querySelectorAll('.color-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.color === color);
  });
}

function getCanvasImage() {
  return doodleCanvas.toDataURL("image/png");
}

// Form submission
async function handleFormSubmit(e) {
  e.preventDefault();
  
  const formData = new FormData(contactForm);
  const doodleImage = getCanvasImage();
  
  const submissionData = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
    doodle: doodleImage,
  };
  
  // Save to localStorage
  const submissions = JSON.parse(localStorage.getItem("observationStudio_submissions") || "[]");
  const newSubmission = {
    ...submissionData,
    timestamp: new Date().toISOString(),
    id: Date.now(),
  };
  submissions.push(newSubmission);
  localStorage.setItem("observationStudio_submissions", JSON.stringify(submissions));

  try {
    // Send email via Resend backend
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submissionData)
    });

    const result = await response.json();
    
    if (result.success) {
      showToast("Email sent successfully! Opening confirmation...");
    } else {
      showToast(`Error: ${result.error || 'Failed to send email'}`);
      console.error("Form submission error:", result);
      return;
    }
  } catch (error) {
    showToast("Network error. Please check your connection.");
    console.error("Form submission error:", error);
    return;
  }
  
  setTimeout(() => {
    const newWindow = window.open("", "_blank");
    if (newWindow) {
      newWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Message Received - Observation Studio</title>
            <style>
              @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap');
              body {
                font-family: 'Space Mono', monospace;
                background: #FFBDC5;
                background-image: 
                  linear-gradient(90deg, rgba(103, 6, 38, 0.06) 1px, transparent 1px),
                  linear-gradient(180deg, rgba(103, 6, 38, 0.06) 1px, transparent 1px);
                background-size: 48px 48px;
                min-height: 100vh;
                padding: 2rem;
                margin: 0;
                color: #3d1a28;
              }
              .container { max-width: 600px; margin: 0 auto; }
              h1 { font-family: 'Instrument Serif', serif; font-size: 2.5rem; margin-bottom: 0.5rem; }
              .annotation { font-family: 'Caveat', cursive; color: rgba(103, 6, 38, 0.7); font-size: 1.25rem; }
              .card { background: rgba(255, 255, 255, 0.8); border-radius: 1rem; padding: 2rem; margin-top: 2rem; border: 1px solid rgba(103, 6, 38, 0.2); }
              .label { font-size: 0.75rem; color: rgba(61, 26, 40, 0.6); margin-bottom: 0.25rem; }
              .value { margin-bottom: 1.5rem; font-size: 1rem; }
              img { max-width: 100%; border-radius: 0.5rem; margin-top: 1rem; border: 2px dashed rgba(103, 6, 38, 0.3); }
              button { 
                background: #670626; 
                color: white; 
                border: none; 
                padding: 0.75rem 1.5rem; 
                border-radius: 0.5rem; 
                font-family: 'Space Mono', monospace;
                cursor: pointer;
                margin-top: 1rem;
              }
              button:hover { opacity: 0.9; }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>message received</h1>
              <p class="annotation">file this under: received.</p>
              
              <div class="card">
                <div class="label">from</div>
                <div class="value">${submissionData.name} (${submissionData.email})</div>
                
                <div class="label">message</div>
                <div class="value">${submissionData.message}</div>
                
                ${doodleImage ? `
                  <div class="label">doodle attached</div>
                  <img src="${doodleImage}" alt="Doodle" />
                  <br />
                  <a href="${doodleImage}" download="doodle.png">
                    <button>download doodle</button>
                  </a>
                ` : ""}
              </div>
              
              <p class="annotation" style="margin-top: 2rem;">- from sharanya's observation studio</p>
            </div>
          </body>
        </html>
      `);
      newWindow.document.close();
    }
  }, 500);

  contactForm.reset();
  clearCanvas();
}

// Scroll observer
function handleScroll() {
  const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  const now = Date.now();

  if (now - lastTrigger > 45000) {
    const triggers = [25, 50, 75, 90];
    const currentTriggerValue = triggers.find(t => scrollPercent >= t && scrollPercent < t + 5);

    if (currentTriggerValue) {
      const randomObs = observations[Math.floor(Math.random() * observations.length)];
      showObservation(randomObs);
      lastTrigger = now;
    }
  }
}

function showObservation(text) {
  observerText.textContent = text;
  scrollObserver.classList.remove('hidden');
  setTimeout(() => {
    scrollObserver.classList.add('hidden');
  }, 3000);
}

// Highlight detector
function handleHighlight(e) {
  const selection = window.getSelection();
  if (selection && selection.toString().trim().length > 0) {
    highlightDetector.style.left = (e.clientX + 10) + 'px';
    highlightDetector.style.top = (e.clientY - 30) + 'px';
    highlightDetector.classList.remove('hidden');
    setTimeout(() => {
      highlightDetector.classList.add('hidden');
    }, 2000);
  }
}

// Toast
function showToast(message) {
  toastMessage.textContent = message;
  toast.classList.remove('hidden');
  setTimeout(() => {
    toast.classList.add('hidden');
  }, 3000);
}
