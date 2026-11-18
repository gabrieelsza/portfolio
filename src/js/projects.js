(() => {
  const PROJECT_DETAILS = {
    vibetrack: {
      title: "VibeTrack",
      kicker: "Full-Stack · IA Multimodal & PWA",
      image: "./src/imagens/projects/vibetrack.png",
      imageAlt: "Interface do aplicativo VibeTrack para análise musical de fotografias",
      summary:
        "Aplicativo instalável (PWA) que analisa fotografias com inteligência artificial multimodal (Google Gemini) — identificando clima, emoções, estética e contexto visual — para recomendar faixas musicais justificadas, com player de prévia integrado e histórico autenticado por usuário.",
      highlights: [
        "Análise visual multimodal com Google Gemini e recomendações musicais justificadas",
        "API REST em TypeScript, Express, Prisma ORM e PostgreSQL (Neon)",
        "Autenticação segura com JWT, bcryptjs, validação de esquemas via Zod e Helmet",
        "Player de prévia de áudio integrado com histórico individual por conta",
        "Experiência PWA instalável com testes automatizados via Vitest e Supertest",
        "Deploy em produção com frontend na Vercel e API dedicada na Render",
      ],
      stack: [
        "TypeScript",
        "React",
        "Node.js",
        "Express",
        "Google Gemini AI",
        "Prisma",
        "PostgreSQL",
        "Tailwind CSS",
        "Vitest",
      ],
      demoUrl: "https://frontend-six-sandy-45.vercel.app/",
      repoUrl: "https://github.com/gabrieelsza/vibeTrack",
    },

    foodexpress: {
      title: "FoodExpress",
      kicker: "Full-Stack · Autoatendimento & Gestão",
      image: "./src/imagens/projects/foodexpress.png",
      imageAlt: "Interface do FoodExpress exibindo cardápio digital e fila de preparo administrativa",
      summary:
        "Sistema web completo de autoatendimento digital e gestão operacional de pedidos para lanchonetes e restaurantes. Permite pedidos no salão por mesa ou entrega com resumo automatizado via WhatsApp, conectado a um painel administrativo em tempo real para cardápio e fila de preparo — eliminando comandas de papel e comissões externas.",
      highlights: [
        "Aplicações isoladas por contexto: portal do cliente, painel administrativo e entregador",
        "API REST em camadas (Controllers, Services, Repositories e Middlewares)",
        "Persistência relacional com Drizzle ORM e SQLite em modo WAL",
        "Segurança nativa com node:crypto (scrypt) e JWT HMAC-SHA256 nas rotas administrativas",
        "Cobertura de testes de unidade e integração com Vitest, Supertest e CI no GitHub Actions",
        "Interface mobile-first em React com Tailwind CSS e rolagem suave",
      ],
      stack: [
        "React",
        "Node.js",
        "Express",
        "Drizzle ORM",
        "SQLite",
        "Tailwind CSS",
        "JWT",
        "Vitest",
      ],
      demoUrl: null,
      repoUrl: "https://github.com/gabrieelsza/FoodExpress",
    },

    tickethub: {
      title: "Ticket Hub",
      kicker: "Full-Stack · Ingressos & APIs Externas",
      image: "./src/imagens/projects/tickethub.png",
      imageAlt: "Plataforma Ticket Hub com vitrine de filmes e eventos em cartaz",
      summary:
        "Plataforma full-stack de venda e gestão de ingressos para eventos e filmes estruturada em três perfis de acesso (Organizador, Cliente e Portaria). Integra-se diretamente às APIs TMDb e Ticketmaster Discovery para importação de catálogos, mapa interativo de assentos com proteção contra concorrência e check-in com bloqueio de reuso.",
      highlights: [
        "Controle de acesso baseado em perfis (Organizador, Cliente e Portaria)",
        "Integração real com as APIs TMDb e Ticketmaster Discovery",
        "Mapa de assentos por sessão com proteção contra compra concorrente",
        "Geração de código de validação e check-in anti-reuso na entrada",
        "Banco PostgreSQL (Neon) modelado com Prisma ORM e containerização Docker",
        "Suite de testes automatizados com Jest e Supertest",
      ],
      stack: [
        "React",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Prisma",
        "Docker",
        "Tailwind CSS",
        "Jest",
      ],
      demoUrl: "https://ticket-hub-bay.vercel.app/",
      repoUrl: "https://github.com/gabrieelsza/ticket-hub",
    },

    marianacamera: {
      title: "Mariana Câmara",
      kicker: "Frontend · Portfólio Editorial",
      image: "./src/imagens/projects/marianacamera.png",
      imageAlt: "Portfólio editorial de Mariana Câmara em azul cobalto e amarelo limão",
      summary:
        "Portfólio editorial desenvolvido sob medida para profissional de Comunicação, Publicidade & Propaganda e Produção Audiovisual. Projeto focado em direção de arte marcante, pré-carregamento de tipografia display personalizada, apresentação estratégica de cases e conversão direta para orçamentos.",
      highlights: [
        "Identidade visual editorial de alto impacto com contraste e ritmo tipográfico",
        "Preload otimizado de fontes customizadas para evitar layout shift",
        "Arquitetura componentizada em React com Tailwind CSS e Lucide Icons",
        "Seções orientadas à conversão de clientes com navegação fluida e responsiva",
        "Configuração de testes automatizados com Vitest e build otimizado em Vite",
      ],
      stack: ["React", "Tailwind CSS", "Vite", "Lucide Icons", "Vitest"],
      demoUrl: "https://marianacamera.vercel.app/",
      repoUrl: "https://github.com/gabrieelsza/marianacamera",
    },

    planejai: {
      title: "planejAI",
      kicker: "Frontend · Planejamento Financeiro",
      image: "./src/imagens/projects/planejai.png",
      imageAlt: "Tela inicial do simulador financeiro planejAI",
      summary:
        "Aplicação web interativa de simulação e planejamento financeiro pessoal. Conduz o usuário por um fluxo guiado e acessível para coletar contexto financeiro, gerar insights personalizados e consultar resultados estruturados com feedback visual imediato.",
      highlights: [
        "Fluxo guiado em etapas focado em clareza cognitiva e baixa fricção",
        "Desenvolvimento com tipagem estática rigorosa em TypeScript",
        "Roteamento declarativo entre simulação, resultados e histórico via React Router",
        "Estados de carregamento refinados com Skeleton UI e Tailwind CSS",
        "Qualidade de código garantida com ESLint e build rápido em Vite",
      ],
      stack: ["TypeScript", "React", "React Router", "Tailwind CSS", "Vite"],
      demoUrl: "https://planej-ai-five.vercel.app/",
      repoUrl: "https://github.com/gabrieelsza/planejAI",
    },

    salon: {
      title: "Lugar da Mulher — Salon",
      kicker: "Frontend · Landing Page Comercial",
      image: "./src/imagens/projects/salon.png",
      imageAlt: "Landing page do salão Lugar da Mulher",
      summary:
        "Landing page comercial responsiva criada para salão de beleza, estruturada com estética acolhedora, hierarquia tipográfica clara, vitrine de serviços, diferenciais, depoimentos e chamadas diretas para agendamento via WhatsApp.",
      highlights: [
        "Arquitetura focada em conversão com CTA direto para agendamento",
        "Design responsivo mobile-first com atenção a contraste e legibilidade",
        "Componentização limpa em React com Tailwind CSS e build leve via Vite",
        "Carregamento rápido e estrutura semântica otimizada para clientes reais",
      ],
      stack: ["React", "Tailwind CSS", "Vite", "UX/UI"],
      demoUrl: "https://landing-salon-three.vercel.app/",
      repoUrl: "https://github.com/gabrieelsza/landing-salon",
    },
  };

  const EXTERNAL_ICON =
    '<i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>';

  const GITHUB_ICON =
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.26 5.69.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>';

  function initProjectFilters() {
    const filterButtons = document.querySelectorAll(".projects-filters .filter-btn");
    const cards = document.querySelectorAll(".projects-grid .project-card");
    if (!filterButtons.length || !cards.length) return;

    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const selected = btn.getAttribute("data-filter") || "all";

        filterButtons.forEach((b) => {
          const isActive = b === btn;
          b.classList.toggle("is-active", isActive);
          b.setAttribute("aria-pressed", String(isActive));
        });

        cards.forEach((card) => {
          const category = card.getAttribute("data-category");
          const shouldShow = selected === "all" || category === selected;

          card.classList.toggle("is-hidden", !shouldShow);
          if (shouldShow) {
            card.classList.remove("is-entering");
            // Force reflow to replay subtle entrance transition
            void card.offsetWidth;
            card.classList.add("is-entering");
          }
        });

        if (typeof window.rebuildThread === "function") {
          window.requestAnimationFrame(() => window.rebuildThread());
        }
      });
    });
  }

  function initProjectModal() {
    const modal = document.getElementById("project-modal");
    if (!modal) return;

    const backdrop = modal.querySelector(".project-modal-backdrop");
    const closeBtn = modal.querySelector(".project-modal-close");
    const scrollContainer =
      document.getElementById("project-modal-scroll") ||
      modal.querySelector(".project-modal-dialog");
    const kickerEl = document.getElementById("modal-project-kicker");
    const titleEl = document.getElementById("modal-project-title");
    const imgEl = document.getElementById("modal-project-image");
    const summaryEl = document.getElementById("modal-project-summary");
    const highlightsEl = document.getElementById("modal-project-highlights");
    const stackEl = document.getElementById("modal-project-stack");
    const actionsEl = document.getElementById("modal-project-actions");

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let lastFocusedElement = null;
    let wheelRafId = null;
    let currentScrollTop = 0;
    let targetScrollTop = 0;

    function stopSmoothWheel() {
      if (wheelRafId !== null) {
        window.cancelAnimationFrame(wheelRafId);
        wheelRafId = null;
      }
      if (scrollContainer) {
        scrollContainer.style.scrollBehavior = "";
      }
    }

    if (scrollContainer && !prefersReducedMotion) {
      scrollContainer.addEventListener(
        "wheel",
        (event) => {
          if (event.ctrlKey || !modal.classList.contains("is-open")) return;

          const maxScroll =
            scrollContainer.scrollHeight - scrollContainer.clientHeight;
          if (maxScroll <= 0) return;

          let delta = event.deltaY;
          if (event.deltaMode === 1) {
            delta *= 32;
          } else if (event.deltaMode === 2) {
            delta *= scrollContainer.clientHeight * 0.85;
          }

          event.preventDefault();

          if (wheelRafId === null) {
            currentScrollTop = scrollContainer.scrollTop;
            targetScrollTop = currentScrollTop;
          }

          targetScrollTop = Math.max(
            0,
            Math.min(maxScroll, targetScrollTop + delta)
          );

          scrollContainer.style.scrollBehavior = "auto";

          if (wheelRafId === null) {
            const step = () => {
              const diff = targetScrollTop - currentScrollTop;
              if (Math.abs(diff) < 0.5) {
                currentScrollTop = targetScrollTop;
                scrollContainer.scrollTop = targetScrollTop;
                scrollContainer.style.scrollBehavior = "";
                wheelRafId = null;
                return;
              }
              currentScrollTop += diff * 0.14;
              scrollContainer.scrollTop = currentScrollTop;
              wheelRafId = window.requestAnimationFrame(step);
            };
            wheelRafId = window.requestAnimationFrame(step);
          }
        },
        { passive: false }
      );

      scrollContainer.addEventListener("touchstart", stopSmoothWheel, {
        passive: true,
      });
    }

    function openModal(projectId, triggerEl) {
      const data = PROJECT_DETAILS[projectId];
      if (!data) return;

      lastFocusedElement = triggerEl || document.activeElement;

      stopSmoothWheel();

      kickerEl.textContent = data.kicker;
      titleEl.textContent = data.title;
      imgEl.src = data.image;
      imgEl.alt = data.imageAlt;
      summaryEl.textContent = data.summary;

      highlightsEl.innerHTML = data.highlights
        .map((item) => `<li>${item}</li>`)
        .join("");

      stackEl.innerHTML = data.stack
        .map((tech) => `<span class="project-pill">${tech}</span>`)
        .join("");

      const actionMarkup = [];
      if (data.demoUrl) {
        actionMarkup.push(
          `<a href="${data.demoUrl}" target="_blank" rel="noopener noreferrer" class="project-btn project-btn--primary">Acessar demo ao vivo ${EXTERNAL_ICON}</a>`
        );
      }
      actionMarkup.push(
        `<a href="${data.repoUrl}" target="_blank" rel="noopener noreferrer" class="project-btn ${
          data.demoUrl ? "project-btn--secondary" : "project-btn--primary"
        }">${GITHUB_ICON} Ver código no GitHub</a>`
      );
      actionsEl.innerHTML = actionMarkup.join("");

      if (scrollContainer) {
        scrollContainer.style.scrollBehavior = "auto";
        scrollContainer.scrollTop = 0;
        currentScrollTop = 0;
        targetScrollTop = 0;
        scrollContainer.style.scrollBehavior = "";
      }

      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";

      if (closeBtn) {
        window.requestAnimationFrame(() => closeBtn.focus());
      }
    }

    function closeModal() {
      if (!modal.classList.contains("is-open")) return;
      stopSmoothWheel();
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";

      if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
        lastFocusedElement.focus();
      }
    }

    document.querySelectorAll("[data-project-open]").forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const id = trigger.getAttribute("data-project-open");
        openModal(id, trigger);
      });
    });

    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (backdrop) backdrop.addEventListener("click", closeModal);

    window.addEventListener("keydown", (event) => {
      if (!modal.classList.contains("is-open")) return;

      if (event.key === "Escape") {
        closeModal();
      } else if (
        ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(
          event.key
        )
      ) {
        stopSmoothWheel();
      }
    });
  }

  function boot() {
    initProjectFilters();
    initProjectModal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
