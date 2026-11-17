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

// Scroll fade-up reveal for main content sections (Hero has its own entrance choreography)
const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.style.opacity = 1;
            e.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('main section').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity .7s ease, transform .7s ease';
    obs.observe(el);
});

const projects = document.querySelectorAll("#projects .project-visual");

function modalImageProject() {
    projects.forEach((e) => {
        e.addEventListener("click", (event) => {
            event.currentTarget.classList.toggle("modal");
        });
    });
}

modalImageProject();
