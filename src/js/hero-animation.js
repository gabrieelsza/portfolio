(() => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const body = document.body;

  // Enable JS-driven choreography immediately so elements start in staged state
  body.classList.add("hero-js-enabled");

  const introScreen = document.getElementById("intro-screen");
  const introCounter = document.getElementById("intro-counter");
  const introSkipBtn = document.getElementById("intro-skip");

  let introFinished = false;

  function revealHero() {
    if (introFinished) return;
    introFinished = true;

    body.classList.remove("intro-active");

    if (introScreen) {
      introScreen.classList.add("is-leaving");
      window.setTimeout(() => {
        introScreen.classList.add("is-done");
      }, 900);
    }

    // Trigger hero staggered animations just as curtain begins sweeping away
    window.requestAnimationFrame(() => {
      window.setTimeout(() => {
        body.classList.add("hero-revealed");
      }, 140);
    });
  }

  function startIntroSequence() {
    if (!introScreen || prefersReducedMotion) {
      if (introScreen) introScreen.classList.add("is-done");
      body.classList.remove("intro-active");
      body.classList.add("hero-revealed");
      introFinished = true;
      return;
    }

    body.classList.add("intro-active");

    const duration = 950;
    const startTime = performance.now();

    function tick(now) {
      if (introFinished) return;
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      // Ease-out cubic for snappy percentage readout
      const eased = 1 - Math.pow(1 - progress, 3);
      const pct = Math.round(eased * 100);

      if (introCounter) {
        introCounter.textContent = `${String(pct).padStart(3, "0")}%`;
      }

      if (progress < 1) {
        window.requestAnimationFrame(tick);
      } else {
        window.setTimeout(revealHero, 120);
      }
    }

    window.requestAnimationFrame(tick);

    // Allow instant skip via button or Escape key
    if (introSkipBtn) {
      introSkipBtn.addEventListener("click", revealHero, { once: true });
    }

    const onKeyDown = (e) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        revealHero();
        window.removeEventListener("keydown", onKeyDown);
      }
    };
    window.addEventListener("keydown", onKeyDown);

    // Hard failsafe so users are never stuck on the intro curtain
    window.setTimeout(revealHero, 2400);
  }

  // =========================================================================
  // KINETIC ROLE ROTATOR
  // =========================================================================
  function initRoleRotator() {
    const rotator = document.getElementById("hero-role-rotator");
    if (!rotator || prefersReducedMotion) return;

    const roles = [
      "Desenvolvedor Full-Stack",
      "Análise e Desenv. de Sistemas",
      "Monitoramento & Observabilidade",
      "APIs, Banco de Dados & Cloud",
    ];

    let index = 0;

    window.setInterval(() => {
      rotator.classList.add("is-switching");
      window.setTimeout(() => {
        index = (index + 1) % roles.length;
        rotator.textContent = roles[index];
        rotator.classList.remove("is-switching");
      }, 300);
    }, 3200);
  }

  // =========================================================================
  // HERO VISUAL — SUBTLE POINTER PARALLAX (Desktop Only)
  // =========================================================================
  function initHeroParallax() {
    if (prefersReducedMotion) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const hero = document.getElementById("hero");
    const layers = document.querySelectorAll("[data-parallax]");
    if (!hero || !layers.length) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId = null;

    function animate() {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      layers.forEach((layer) => {
        const depth = parseFloat(layer.getAttribute("data-parallax")) || 12;
        const tx = currentX * depth;
        const ty = currentY * depth;
        layer.style.transform = `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0)`;
      });

      if (Math.abs(targetX - currentX) > 0.002 || Math.abs(targetY - currentY) > 0.002) {
        rafId = window.requestAnimationFrame(animate);
      } else {
        rafId = null;
      }
    }

    hero.addEventListener("mousemove", (event) => {
      const rect = hero.getBoundingClientRect();
      targetX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      targetY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      if (!rafId) {
        rafId = window.requestAnimationFrame(animate);
      }
    });

    hero.addEventListener("mouseleave", () => {
      targetX = 0;
      targetY = 0;
      if (!rafId) {
        rafId = window.requestAnimationFrame(animate);
      }
    });
  }

  // =========================================================================
  // NAVBAR SCROLL STATE, ACTIVE LINK & MOBILE DRAWER
  // =========================================================================
  function initNavigation() {
    const nav = document.querySelector(".site-nav");
    const navToggle = document.getElementById("nav-toggle");
    const mobileDrawer = document.getElementById("mobile-drawer");
    const navLinks = document.querySelectorAll(".nav-links a[href^='#']");
    const drawerLinks = document.querySelectorAll(".mobile-drawer a");

    if (nav) {
      const updateNavScroll = () => {
        if (window.scrollY > 36) {
          nav.classList.add("is-scrolled");
        } else {
          nav.classList.remove("is-scrolled");
        }
      };
      window.addEventListener("scroll", updateNavScroll, { passive: true });
      updateNavScroll();
    }

    // Active section highlight
    const sections = document.querySelectorAll("main section[id]");
    if (sections.length && navLinks.length) {
      const sectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const id = entry.target.getAttribute("id");
            navLinks.forEach((link) => {
              const isMatch = link.getAttribute("href") === `#${id}`;
              link.classList.toggle("is-active", isMatch);
            });
          });
        },
        { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
      );

      sections.forEach((sec) => sectionObserver.observe(sec));
    }

    // Mobile Drawer Toggle
    if (navToggle && mobileDrawer) {
      const setDrawerState = (open) => {
        navToggle.setAttribute("aria-expanded", String(open));
        navToggle.setAttribute("aria-label", open ? "Fechar menu de navegação" : "Abrir menu de navegação");
        mobileDrawer.classList.toggle("is-open", open);
        mobileDrawer.setAttribute("aria-hidden", String(!open));
        body.style.overflow = open ? "hidden" : "";
      };

      navToggle.addEventListener("click", () => {
        const isOpen = navToggle.getAttribute("aria-expanded") === "true";
        setDrawerState(!isOpen);
      });

      drawerLinks.forEach((link) => {
        link.addEventListener("click", () => setDrawerState(false));
      });

      window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && mobileDrawer.classList.contains("is-open")) {
          setDrawerState(false);
        }
      });
    }
  }

  // Boot everything cleanly once DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      startIntroSequence();
      initRoleRotator();
      initHeroParallax();
      initNavigation();
    });
  } else {
    startIntroSequence();
    initRoleRotator();
    initHeroParallax();
    initNavigation();
  }
})();
