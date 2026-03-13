// js/script.js

console.log("Site carregado");

// =========================
// WhatsApp Flutuante
// =========================
const whatsappBtn = document.querySelector('.whatsapp-float');

if (whatsappBtn) {
  whatsappBtn.style.opacity = '0';
  whatsappBtn.style.transition = 'opacity 0.4s, transform 0.4s';
  whatsappBtn.style.transform = 'translateY(20px)';

  window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
      whatsappBtn.style.opacity = '1';
      whatsappBtn.style.transform = 'translateY(0)';
    } else {
      whatsappBtn.style.opacity = '0';
      whatsappBtn.style.transform = 'translateY(20px)';
    }
  });

  whatsappBtn.addEventListener('mouseenter', () => {
    whatsappBtn.style.transform = 'scale(1.1)';
  });
  whatsappBtn.addEventListener('mouseleave', () => {
    whatsappBtn.style.transform = 'scale(1)';
  });
}

// =========================
// Animação de Cards de Serviços
// =========================
const serviceCards = document.querySelectorAll('.servicos .card');
serviceCards.forEach(card => {
  card.style.transition = 'transform 0.3s, box-shadow 0.3s';
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-5px)';
    card.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
  });
});

// =========================
// Log de Cliques nos Botões
// =========================
const allButtons = document.querySelectorAll('a.btn');
allButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    console.log(`Clique no botão: "${btn.textContent.trim()}"`);
  });
});

// =========================
// Menu Ativo
// =========================
const currentPath = window.location.pathname.split("/").pop();
document.querySelectorAll('nav a').forEach(link => {
  if (link.getAttribute('href') === currentPath) {
    link.classList.add('active');
  }
});

// =========================
// Scroll Suave para Links Internos
// =========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("header nav");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}