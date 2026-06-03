document.addEventListener('DOMContentLoaded', () => {

  const isLoggedIn = sessionStorage.getItem('loggedIn');

  // Get Started button in hero
  const heroBtn = document.querySelector('.btn-hero-primary');
  if (heroBtn) {
    heroBtn.parentElement.href = isLoggedIn ? 'dashboard.html' : 'login.html';
  }

  // Nav Get Started button
  const navBtn = document.querySelector('.nav-actions .btn-primary');
  if (navBtn) {
    navBtn.parentElement.href = isLoggedIn ? 'dashboard.html' : 'login.html';
  }

  // Launch Dashboard button in CTA section
  const ctaBtn = document.querySelector('.cta-section .btn-hero-primary');
  if (ctaBtn) {
    ctaBtn.parentElement.href = isLoggedIn ? 'dashboard.html' : 'login.html';
  }

  // Show different text if logged in
  if (isLoggedIn) {
    if (heroBtn) heroBtn.textContent = 'Go to Dashboard';
    if (navBtn)  navBtn.textContent  = 'Dashboard';
  }

});