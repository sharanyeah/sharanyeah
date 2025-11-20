let currentPage = 'home';
let currentQuoteIndex = 0;
let quoteInterval;
let ageInterval;
let quoteStartTimeout;

function calculateAge() {
    const birthDate = new Date('2004-07-21T06:00:00');
    const now = new Date();
    const diffMs = now - birthDate;
    const msPerYear = 365.25 * 24 * 60 * 60 * 1000;
    const ageInYears = diffMs / msPerYear;
    return ageInYears;
}

function updateAge() {
    const ageElement = document.querySelector('.age');
    if (ageElement) {
        const age = calculateAge();
        const ageFormatted = age.toFixed(9);
        ageElement.textContent = ageFormatted;
    }
}

function rotateQuote() {
    const quoteElement = document.querySelector('.quote-text');
    if (quoteElement) {
        quoteElement.classList.remove('visible');
        setTimeout(() => {
            currentQuoteIndex = (currentQuoteIndex + 1) % QUOTES.length;
            quoteElement.textContent = QUOTES[currentQuoteIndex];
            quoteElement.classList.add('visible');
        }, 800);
    }
}

function startQuoteRotation() {
    if (quoteInterval) clearInterval(quoteInterval);
    quoteInterval = setInterval(rotateQuote, 5000);
}

function stopQuoteRotation() {
    if (quoteInterval) {
        clearInterval(quoteInterval);
        quoteInterval = null;
    }
}

function renderHomeContent() {
    const age = calculateAge();
    return `
        <div class="page">
            <div class="home-header">
                <h1 class="name">SHARANYA</h1>
                <p class="tagline">
                    <span class="strikethrough">aspiring</span> billionaire · philanthropist (of vibes) · baddie <span class="strikethrough">in distress</span>
                </p>
            </div>
            
            <div class="bio">
                <p>hey! i'm sharanya, currently <span class="age">${age.toFixed(9)}</span> and figuring things out one ambitious project at a time.</p>
                
                <p>i build things on the internet—some useful, some questionable, all made with unreasonable amounts of coffee and audacity. my interests include: starting projects at 2am, collecting half-read books, and pretending i have a consistent sleep schedule.</p>
                
                <p>i write occasionally on <a href="https://substack.com" class="substack-link">substack</a> about creativity, building in public, and why most productivity advice is a scam.</p>
                
                <p>currently working on not working on too many things at once (it's going badly).</p>
            </div>
            
            <div class="rotating-quote">
                <p class="quote-text visible">${QUOTES[currentQuoteIndex]}</p>
            </div>
        </div>
    `;
}

function renderProjectsContent() {
    return `
        <div class="page">
            <div class="page-header">
                <h1 class="page-title">projects</h1>
                <p class="page-subtitle">things i've built (and actually finished)</p>
            </div>
            
            <div class="list-container">
                ${PROJECTS.map((project, index) => `
                    <div class="list-item scroll-reveal" data-project="${project.id}" style="transition-delay: ${index * 80}ms">
                        <h3 class="item-title">${project.title}</h3>
                        <p class="item-intro">${project.intro}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderProjectDetailContent(projectId) {
    const project = PROJECTS.find(p => p.id === projectId);
    if (!project) return renderProjectsContent();
    
    return `
        <div class="detail-view">
            <a href="#projects" class="back-link">← back to projects</a>
            <h1 class="detail-title">${project.title}</h1>
            <p class="detail-intro">${project.intro}</p>
            <div class="detail-content">${project.content}</div>
        </div>
    `;
}

function renderNotesContent() {
    return `
        <div class="page">
            <div class="page-header">
                <h1 class="page-title">notes</h1>
                <p class="page-subtitle">thoughts, observations, mild rants</p>
            </div>
            
            <div class="list-container">
                ${NOTES.map((note, index) => `
                    <div class="list-item scroll-reveal" data-note="${note.id}" style="transition-delay: ${index * 80}ms">
                        <h3 class="item-title">${note.title}</h3>
                        <p class="item-preview">${note.preview}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderNoteDetailContent(noteId) {
    const note = NOTES.find(n => n.id === noteId);
    if (!note) return renderNotesContent();
    
    return `
        <div class="detail-view">
            <a href="#notes" class="back-link">← back to notes</a>
            <h1 class="detail-title">${note.title}</h1>
            <p class="detail-preview">${note.preview}</p>
            <div class="detail-content">${note.content}</div>
        </div>
    `;
}

function renderContactContent() {
    return `
        <div class="page">
            <div class="contact-container">
                <div class="page-header">
                    <h1 class="page-title">contact</h1>
                    <p class="page-subtitle">let's connect</p>
                </div>
                
                <div class="contact-intro">
                    <p>always down to chat about ideas, collaborations, or why your favorite productivity system is actually making you less productive.</p>
                    <p>find me on the internet:</p>
                </div>
                
                <div class="social-links">
                    <a href="https://instagram.com" class="social-link scroll-reveal" style="transition-delay: 0ms">instagram</a>
                    <a href="https://twitter.com" class="social-link scroll-reveal" style="transition-delay: 80ms">twitter/x</a>
                    <a href="https://substack.com" class="social-link scroll-reveal" style="transition-delay: 160ms">substack</a>
                    <a href="mailto:hello@sharanya.com" class="social-link scroll-reveal" style="transition-delay: 240ms">email</a>
                </div>
            </div>
        </div>
    `;
}

function setupScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isInViewport) {
            el.classList.add('revealed');
        }
    });
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => {
        if (!el.classList.contains('revealed')) {
            observer.observe(el);
        }
    });
}

function attachEventListeners() {
    const projectItems = document.querySelectorAll('[data-project]');
    projectItems.forEach(item => {
        item.addEventListener('click', () => {
            const projectId = item.getAttribute('data-project');
            window.location.hash = `projects/${projectId}`;
        });
    });
    
    const noteItems = document.querySelectorAll('[data-note]');
    noteItems.forEach(item => {
        item.addEventListener('click', () => {
            const noteId = item.getAttribute('data-note');
            window.location.hash = `notes/${noteId}`;
        });
    });
}

function updateNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === currentPage) {
            link.classList.add('active');
        }
    });
}

function route() {
    const hash = window.location.hash.slice(1) || 'home';
    const [page, ...params] = hash.split('/');
    
    const contentArea = document.querySelector('.content-area');
    if (!contentArea) {
        // First load - render everything
        const app = document.getElementById('app');
        app.innerHTML = renderFullPage(page, params);
        currentPage = page;
        initializePage();
        return;
    }
    
    // Subsequent navigations - only update content area
    contentArea.style.opacity = '0';
    contentArea.style.transition = 'opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1)';
    
    setTimeout(() => {
        currentPage = page;
        
        stopQuoteRotation();
        
        if (quoteStartTimeout) {
            clearTimeout(quoteStartTimeout);
            quoteStartTimeout = null;
        }
        
        if (ageInterval) {
            clearInterval(ageInterval);
            ageInterval = null;
        }
        
        let content;
    
        if (page === 'projects' && params[0]) {
            content = renderProjectDetailContent(params[0]);
            currentPage = 'projects';
        } else if (page === 'notes' && params[0]) {
            content = renderNoteDetailContent(params[0]);
            currentPage = 'notes';
        } else {
            switch (page) {
                case 'projects':
                    content = renderProjectsContent();
                    break;
                case 'notes':
                    content = renderNotesContent();
                    break;
                case 'contact':
                    content = renderContactContent();
                    break;
                default:
                    content = renderHomeContent();
                    currentPage = 'home';
            }
        }
        
        contentArea.innerHTML = content;
        updateNavigation();
        
        contentArea.style.opacity = '1';
        
        if (currentPage === 'home') {
            setTimeout(updateAge, 100);
            ageInterval = setInterval(updateAge, 100);
            quoteStartTimeout = setTimeout(startQuoteRotation, 1000);
        }
        
        setTimeout(() => {
            setupScrollReveal();
            attachEventListeners();
        }, 50);
    }, 200);
}

function renderFullPage(page, params) {
    let content;
    if (page === 'projects' && params[0]) {
        content = renderProjectDetailContent(params[0]);
    } else if (page === 'notes' && params[0]) {
        content = renderNoteDetailContent(params[0]);
    } else {
        switch (page) {
            case 'projects':
                content = renderProjectsContent();
                break;
            case 'notes':
                content = renderNotesContent();
                break;
            case 'contact':
                content = renderContactContent();
                break;
            default:
                content = renderHomeContent();
        }
    }
    
    return `
        <nav class="nav-inline">
            <a href="#home" class="nav-inline-link ${page === 'home' ? 'active' : ''}" data-page="home">home</a>
            <a href="#projects" class="nav-inline-link ${page === 'projects' ? 'active' : ''}" data-page="projects">projects</a>
            <a href="#notes" class="nav-inline-link ${page === 'notes' ? 'active' : ''}" data-page="notes">notes</a>
            <a href="#contact" class="nav-inline-link ${page === 'contact' ? 'active' : ''}" data-page="contact">contact</a>
        </nav>
        <div class="content-area">${content}</div>
    `;
}

function initializePage() {
    updateNavigation();
    setupScrollReveal();
    attachEventListeners();
    
    if (currentPage === 'home') {
        setTimeout(updateAge, 100);
        ageInterval = setInterval(updateAge, 100);
        quoteStartTimeout = setTimeout(startQuoteRotation, 1000);
    }
}

window.addEventListener('hashchange', route);
window.addEventListener('load', route);
