const DEFAULT_SERVICES = [
  {
    id: "pedicure-sem-esmalte",
    title: "Pedicure Sem Esmaltação",
    desc: "Cutilagem simples, remoção cuidadosa do excesso de cutículas e higienização profunda. Ideal para quem busca um aspect limpo, saudável e extremamente natural.",
    price: "R$ 45,00",
    image: "https://clmais.com.br/wp-content/uploads/2019/09/P%C3%A9s-Divulga%C3%A7%C3%A3o-1-1024x768.jpg"
  },
  {
    id: "pedicure-tradicional",
    title: "Pedicure Tradicional Premium",
    desc: "Procedimento completo de autocuidado. Inclui cutilagem russa, detox da lâmina ungueal, polimento sutil, esmaltação perfeita e hidratação profunda.",
    price: "R$ 60,00",
    image: "https://i.pinimg.com/736x/7b/fc/70/7bfc701bd8ac9a4a602a7769efc62fd5.jpg"
  },
  {
    id: "pedicure-onicofose",
    title: "Pedicure com Onicofose",
    desc: "Alívio imediato para excesso de pele nas laterais das unhas, sensibilidade e dor. Cuidados profundos, higienização rigorosa, hidratação e massagem relaxante no massageador de pés (10 a 15 min). Duração de 1h40 a 2h.",
    price: "R$ 80,00",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ySOJI_qllXX9XfaJj7-fCwIv6WWlmQA6hWCoyBthZnklWv_HQLl11v4&s=10"
  },
  {
    id: "esmaltacao-gel",
    title: "Esmaltação em Gel",
    desc: "Esmaltação moderna com secagem em cabine LED. Proporciona brilho espelhado intenso e durabilidade incrível. Manutenção recomendada em até 30 dias.",
    price: "R$ 95,00 (ou R$ 110,00 com Onicofose)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE6XClq9IBw14uC4Z6KAy7g53EKNiEYj2CuojqzjkgMK8Mbgz2ZGNFsXQ&s=10"
  },
  {
    id: "plastica-pes",
    title: "Plástica dos Pés",
    desc: "Saúde, renovação celular e alívio completo. Conta com isolamento plantar, remoção indolor de calosidades acumuladas, lixamento elétrico preciso, aplicação de parafina fria e massagem relaxante com massageador.",
    price: "R$ 140,00 (ou R$ 150,00 com Onicofose)",
    image: "https://www.ctbelezaecia.com.br/wp-content/uploads/2021/10/O-que-e-feito-na-Plastica-dos-Pes.jpeg"
  },
  {
    id: "terapia-podal",
    title: "Terapia Podal",
    desc: "Tratamento ultra-profundo ideal para pés com rachaduras, ressecamento severo ou cansaço acumulado. Aplicação de emoliente especial, lixamento, hidromassagem morna enriquecida com rosas e sais minerais, finalizado com massageador de pés.",
    price: "R$ 160,00 (ou R$ 170,00 com Onicofose)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA6G6YcNlrfoLuEtXkI2TIMPGt2jzMczIxIXZ-g2Mr5FSoaZ80uo_yeME&s=10"
  },
  {
    id: "reconstrucao-podal",
    title: "Reconstrução Podal",
    desc: "Técnica restauradora de unhas com quebras profundas, deformidades ou fragilidades extremas. Utiliza tips podal de alta tecnologia ou molde F1 para reconstruir a ungueal com naturalidade. *Valor adicional ao procedimento base.*",
    price: "Dedão (Hálux) R$ 25,00 cada | Pé Completo a partir de R$ 60,00",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw5UjUv5RoWKqv4GAZKOli80fSVkR5n3dqOT5P0Vs5NY7hvo_6cbmo6b_Y&s=10"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  // --- LocalStorage Initialization & Cleanup ---
  localStorage.removeItem('esmalteria_services');
  localStorage.removeItem('larissa_belo_services');
  localStorage.removeItem('larissabelo_services_v4');
  localStorage.removeItem('larissabelo_services_v5');
  
  if (!localStorage.getItem('larissabelo_services_v6')) {
    localStorage.setItem('larissabelo_services_v6', JSON.stringify(DEFAULT_SERVICES));
  }

  // --- Render Services in landing page ---
  const servicesGrid = document.getElementById('servicesGrid');
  if (servicesGrid) {
    const services = JSON.parse(localStorage.getItem('larissabelo_services_v6'));
    servicesGrid.innerHTML = ''; // Clear fallback

    services.forEach((service, index) => {
      // Create elements dynamically
      const card = document.createElement('div');
      // Alternate delays for grid animations
      const delayClass = `delay-${(index % 3) + 1}`;
      card.className = `service-card reveal ${delayClass}`;
      
      card.innerHTML = `
        <div class="service-image">
          <img src="${service.image || 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=500&auto=format&fit=crop'}" alt="${service.title}">
        </div>
        <div class="service-content">
          <h3 class="service-title">${service.title}</h3>
          <p class="service-desc">${service.desc}</p>
          <div class="service-price-row">
            <span class="service-price-label">Valor</span>
            <span class="service-price">${service.price}</span>
          </div>
        </div>
      `;
      servicesGrid.appendChild(card);
    });
  }

  // --- Mobile Menu Toggle ---
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  if (menuToggle && navLinks) {
    const links = navLinks.querySelectorAll('a');
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    links.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // --- Sticky Header on Scroll ---
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // --- FAQ Accordion ---
  const faqHeaders = document.querySelectorAll('.faq-header');
  faqHeaders.forEach(faqHeader => {
    faqHeader.addEventListener('click', () => {
      const faqItem = faqHeader.parentElement;
      
      // Close all other FAQ items
      document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
          item.classList.remove('active');
        }
      });

      // Toggle current FAQ item
      faqItem.classList.toggle('active');
    });
  });

  // --- Scroll Reveal Animation ---
  const reveals = document.querySelectorAll('.reveal');
  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach(reveal => {
    revealOnScroll.observe(reveal);
  });

  // --- Theme Switcher ---
  const themeClassicBtn = document.getElementById('themeClassicBtn');
  const themeVibrantBtn = document.getElementById('themeVibrantBtn');

  if (themeClassicBtn && themeVibrantBtn) {
    // Read from localStorage (vibe choice)
    const savedTheme = localStorage.getItem('larissabelo_theme');
    if (savedTheme === 'vibrant') {
      document.body.classList.add('theme-vibrant-pink');
      themeClassicBtn.classList.remove('active');
      themeVibrantBtn.classList.add('active');
    }

    themeClassicBtn.addEventListener('click', () => {
      document.body.classList.remove('theme-vibrant-pink');
      themeClassicBtn.classList.add('active');
      themeVibrantBtn.classList.remove('active');
      localStorage.setItem('larissabelo_theme', 'classic');
    });

    themeVibrantBtn.addEventListener('click', () => {
      document.body.classList.add('theme-vibrant-pink');
      themeClassicBtn.classList.remove('active');
      themeVibrantBtn.classList.add('active');
      localStorage.setItem('larissabelo_theme', 'vibrant');
    });
  }
});
