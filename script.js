const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
  menuToggle.innerHTML = open
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el, index) => {
  el.style.transitionDelay = `${Math.min(index * 35, 220)}ms`;
  observer.observe(el);
});

// Active navigation while scrolling
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = 'home';
  sections.forEach(section => {
    const top = section.offsetTop - 130;
    if (window.scrollY >= top) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}, { passive: true });

// Animated counters
const counters = document.querySelectorAll('[data-count]');
const counterObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = Number(el.dataset.count);
    let start = 0;
    const duration = 900;
    const startTime = performance.now();

    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const value = Math.floor(progress * target);
      el.textContent = value + (target > 0 ? '+' : '');
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target + '+';
    }
    requestAnimationFrame(tick);
    obs.unobserve(el);
  });
}, { threshold: .7 });
counters.forEach(c => counterObserver.observe(c));

// Project modal
const projectData = {
  hotel: {
    number: 'PROJECT 01',
    title: 'Hotel Management System',
    description: 'A Java-based hotel management system designed to handle room bookings, guest check-ins and check-outs, billing, room management and inventory management with MySQL data storage.',
    tags: ['Java', 'Swing', 'AWT', 'MySQL']
  },
  exigency: {
    number: 'PROJECT 02',
    title: 'Exigency Alert System',
    description: 'An emergency alert application using Dart and Firebase. An intense device shake triggers an alert that can send SMS information containing device location, a live photo and surrounding audio to chosen contacts.',
    tags: ['Dart', 'Flutter', 'Firebase']
  },
  human: {
    number: 'PROJECT 03',
    title: 'Robust Human Target Detection & Acquisition',
    description: 'A surveillance-focused project using TensorFlow and Python to detect and track human targets in challenging scenarios, with anomaly detection for unusual behavior and visual alarm generation.',
    tags: ['Python', 'TensorFlow', 'AI/ML']
  },
  erp: {
    number: 'PROJECT 04',
    title: 'ERP Development & Implementation',
    description: 'An internship project focused on how ERP can centralize organizational processes, integrate departments, automate tasks and improve data accuracy for better decision-making. Work included requirements gathering, solution design, troubleshooting and user training.',
    tags: ['ERP', 'Implementation', 'Automation']
  }
};

const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalNumber = document.getElementById('modalNumber');
const modalDescription = document.getElementById('modalDescription');
const modalTags = document.getElementById('modalTags');

document.querySelectorAll('.project-card').forEach(card => {
  card.querySelector('.project-link').addEventListener('click', () => {
    const data = projectData[card.dataset.project];
    modalNumber.textContent = data.number;
    modalTitle.textContent = data.title;
    modalDescription.textContent = data.description;
    modalTags.innerHTML = data.tags.map(tag => `<span>${tag}</span>`).join('');
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });
});

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', closeModal);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

document.getElementById('year').textContent = new Date().getFullYear();
