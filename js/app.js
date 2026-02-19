/* ==============================
   MENU RESPONSIVE
============================== */
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

/* ==============================
   SCROLL SUAVE ENTRE SECCIONES
============================== */
const navAnchors = document.querySelectorAll('a[href^="#"]');

navAnchors.forEach(anchor => {
  anchor.addEventListener('click', event => {
    event.preventDefault();

    const targetId = anchor.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

/* ==============================
   VALIDACIÓN DE FORMULARIO
============================== */
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', event => {
    event.preventDefault();

    const name = contactForm.querySelector('#name').value.trim();
    const email = contactForm.querySelector('#email').value.trim();
    const message = contactForm.querySelector('#message').value.trim();

    if (!name || !email || !message) {
      showFormMessage('Por favor completa todos los campos.', 'error');
      return;
    }

    showFormMessage('Mensaje enviado correctamente ✔️', 'success');
    contactForm.reset();
  });
}

function showFormMessage(text, type) {
  let messageElement = document.querySelector('.form-feedback');

  if (!messageElement) {
    messageElement = document.createElement('p');
    messageElement.classList.add('form-feedback');
    contactForm.appendChild(messageElement);
  }

  messageElement.textContent = text;
  messageElement.style.color = type === 'success' ? 'green' : 'red';
}

/* ==============================
   BOTÓN CTA INTERACTIVO
============================== */
const ctaButton = document.querySelector('.btn-primary');

if (ctaButton) {
  ctaButton.addEventListener('click', () => {
    alert('Gracias por tu interés en SmartStay 🚀');
  });
}

/* ==============================
   ANIMACIÓN POR SCROLL
============================== */
const animatedSections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

animatedSections.forEach(section => {
  observer.observe(section);
});
