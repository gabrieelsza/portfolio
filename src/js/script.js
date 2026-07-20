// Draw a single continuous thread that runs down through section anchor points
function buildThread() {
    const svg = document.getElementById('thread-svg');
    const path = document.getElementById('thread-path');
    const anchors = ['hero', 'about', 'stack', 'projects', 'journey', 'githubsec', 'contact'];
    const docHeight = document.body.scrollHeight;
    const width = window.innerWidth;
    svg.setAttribute('viewBox', `0 0 ${width} ${docHeight}`);
    svg.style.height = docHeight + 'px';

    let d = '';
    anchors.forEach((id, i) => {
        const el = document.getElementById(id);
        const rect = el.getBoundingClientRect();
        const y = rect.top + window.scrollY + rect.height / 2;
        const x = i % 2 === 0 ? width * 0.06 : width * 0.06;
        if (i === 0) { d += `M ${x} ${y} `; }
        else {
            const prevY = d ? parseFloat(d.split(' ').slice(-1)[0]) : y;
            const midY = (y + prevY) / 2;
            d += `C ${x + 40} ${midY}, ${x - 40} ${midY}, ${x} ${y} `;
        }
    });
    path.setAttribute('d', d);

    // animate draw-in based on scroll
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    function onScroll() {
        const scrollTop = window.scrollY;
        const winHeight = window.innerHeight;
        const scrollable = docHeight - winHeight;
        const progress = Math.min(1, Math.max(0, (scrollTop + winHeight * 0.5) / scrollable));
        path.style.strokeDashoffset = length * (1 - progress);
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
}

window.addEventListener('load', buildThread);
window.addEventListener('resize', buildThread);

// simple fade-up reveal
const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.style.opacity = 1;
            e.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.15 });


document.querySelectorAll('section, article > *').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity .7s ease, transform .7s ease';
    obs.observe(el);
});

const navLinks = document.querySelector(".nav-links");
const about = document.querySelector("#about");

function estaoSobrepostos(navLinks, about) {
    const retA = navLinks.getBoundingClientRect();
    const retB = about.getBoundingClientRect();

    return !(
        retA.right < retB.left ||
        retA.left > retB.right ||
        retA.bottom < retB.top ||
        retA.top > retB.bottom
    );
}

document.addEventListener('scroll', () => {
    if (estaoSobrepostos(navLinks, about)) {
        // Ação executada quando estão em cima um do outro
        navLinks.style.color = 'var(--cream)';
    } else {
        navLinks.style.color = 'var(--black)';
    }
});

const projects = document.querySelectorAll("#projects .project-visual");

function modalImageProject() {
    projects.forEach((e) => {
        e.addEventListener("click", (event) => {
            console.log("clicou");
            event.currentTarget.classList.toggle("modal");
        });
    });
}

modalImageProject();