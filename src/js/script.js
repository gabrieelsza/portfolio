// Draw a single continuous thread that runs down through section anchor points
let threadScrollBound = false;
let currentThreadLength = 0;

function updateThreadOnScroll() {
    const path = document.getElementById('thread-path');
    if (!path || !currentThreadLength) return;

    const docHeight = document.body.scrollHeight;
    const scrollTop = window.scrollY;
    const winHeight = window.innerHeight;
    const scrollable = Math.max(1, docHeight - winHeight);
    const progress = Math.min(1, Math.max(0, (scrollTop + winHeight * 0.5) / scrollable));
    path.style.strokeDashoffset = currentThreadLength * (1 - progress);
}

function buildThread() {
    const svg = document.getElementById('thread-svg');
    const path = document.getElementById('thread-path');
    if (!svg || !path) return;

    const anchors = ['hero', 'about', 'stack', 'projects', 'journey', 'githubsec', 'contact'];
    const docHeight = document.body.scrollHeight;
    const width = window.innerWidth;
    svg.setAttribute('viewBox', `0 0 ${width} ${docHeight}`);
    svg.style.height = docHeight + 'px';

    let d = '';
    let prevY = 0;

    anchors.forEach((id, i) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const y = rect.top + window.scrollY + rect.height / 2;
        const x = width * 0.06;

        if (i === 0) {
            d += `M ${x} ${y} `;
        } else {
            const midY = (y + prevY) / 2;
            d += `C ${x + 40} ${midY}, ${x - 40} ${midY}, ${x} ${y} `;
        }
        prevY = y;
    });

    path.setAttribute('d', d);

    // animate draw-in based on scroll
    currentThreadLength = path.getTotalLength();
    path.style.strokeDasharray = currentThreadLength;
    path.style.strokeDashoffset = currentThreadLength;

    if (!threadScrollBound) {
        window.addEventListener('scroll', updateThreadOnScroll, { passive: true });
        threadScrollBound = true;
    }
    updateThreadOnScroll();
}

window.addEventListener('load', buildThread);
window.addEventListener('resize', buildThread);
window.rebuildThread = buildThread;

// Scroll fade-up reveal for main content sections (safe for deep links, tall sections, and reduced motion)
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const mainSections = document.querySelectorAll('main section');

if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const revealSection = (el) => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    };

    const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                revealSection(entry.target);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.01, rootMargin: '0px 0px -40px 0px' });

    const initialHashId = window.location.hash ? window.location.hash.slice(1) : '';

    mainSections.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isBelowFold = rect.top > window.innerHeight * 0.95;
        const isInitialHashTarget = initialHashId && el.id === initialHashId;

        if (isBelowFold && !isInitialHashTarget) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(24px)';
            el.style.transition = 'opacity .65s ease, transform .65s ease';
            obs.observe(el);
        } else {
            revealSection(el);
        }
    });

    // Guarantee target section is immediately visible on hash navigation
    window.addEventListener('hashchange', () => {
        const targetId = window.location.hash.slice(1);
        const target = targetId ? document.getElementById(targetId) : null;
        if (target) revealSection(target);
    });
}
