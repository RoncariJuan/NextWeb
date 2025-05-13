// Inicialização do particles.js com configuração embutida
document.addEventListener('DOMContentLoaded', function () {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 200,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: { value: "#a855f7" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 }
      },
      opacity: {
        value: 0.8,
        random: false
      },
      size: {
        value: 5,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 80,
        color: "#a855f7",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 5,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out"
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        repulse: { distance: 50 },
        push: { particles_nb: 10 }
      }
    },
    retina_detect: true
  });
});
    // Animação de deslize para as seções
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    const headerHeight = document.querySelector('header').offsetHeight;

    // Função para animar o deslize
    function smoothScroll(target) {
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition - headerHeight;
      const duration = 1000; // Duração da animação em milissegundos
      let start = null;

      function animation(currentTime) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Função de easing para suavizar a animação
        const ease = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        
        window.scrollTo(0, startPosition + distance * ease(progress));

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }

      requestAnimationFrame(animation);
    }

    // Adicionar eventos de clique para os links de navegação
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        if (targetId.startsWith('#')) {
          const targetSection = document.querySelector(targetId);
          if (targetSection) {
            smoothScroll(targetSection);
          }
        }
      });
    });

    // Animação ao rolar a página
    function animateOnScroll() {
      sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
          section.style.opacity = '1';
          section.style.transform = 'translateX(0)';
          
          // Adiciona um pequeno delay baseado no índice para criar um efeito cascata
          section.style.transitionDelay = `${index * 0.1}s`;
        }
      });
    }

    // Configurar estilos iniciais para as seções
    sections.forEach((section, index) => {
      section.style.opacity = '0';
      // Alterna a direção do deslize baseado no índice
      section.style.transform = index % 2 === 0 ? 'translateX(-100px)' : 'translateX(100px)';
      section.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    // Adicionar evento de scroll com throttling para melhor performance
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          animateOnScroll();
          ticking = false;
        });
        ticking = true;
      }
    });

    // Executar uma vez ao carregar para animar seções visíveis
    animateOnScroll();

    document.querySelectorAll("#faq-accordion button").forEach((btn) => {
      btn.addEventListener("click", () => {
        const expanded = btn.getAttribute("aria-expanded") === "true";
        const icon = btn.querySelector("svg");
        const content = btn.nextElementSibling;
  
        btn.setAttribute("aria-expanded", !expanded);
        icon.classList.toggle("rotate-180");
        content.classList.toggle("hidden");
      });
    });
