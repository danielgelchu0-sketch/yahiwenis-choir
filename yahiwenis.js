// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', function() {
  navLinks.classList.toggle('open');
});

// ===== ACTIVE NAV LINK =====
const currentPage = window.location.href;
const navItems = document.querySelectorAll('#nav-links a');

navItems.forEach(function(link) {
  if (link.href === currentPage) {
    link.style.color = '#5b3a29';
    link.style.borderBottom = '2px solid #5b3a29';
  }
});

// ===== FORM VALIDATION =====
const contactForm = document.querySelector('.contact-form-wrapper form');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();

    if (name === '') {
      alert('Please enter your name');
      return;
    }

    if (email === '') {
      alert('Please enter your email');
      return;
    }

    if (!email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }

    if (message === '') {
      alert('Please enter a message');
      return;
    }

    alert('Message sent successfully!');
    contactForm.reset();
  });
}

// ===== SMOOTH SCROLL =====
const allLinks = document.querySelectorAll('a[href^="#"]');

allLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});