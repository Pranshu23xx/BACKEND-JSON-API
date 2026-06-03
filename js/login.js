document.addEventListener('DOMContentLoaded', () => {

  // Toggle password visibility
  const togglePwd = document.getElementById('togglePwd');
  const passwordInput = document.getElementById('password');
  togglePwd.addEventListener('click', () => {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
  });

  // Refresh captcha
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  function generateCaptcha() {
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
  }
  document.getElementById('refreshCaptcha').addEventListener('click', () => {
    document.getElementById('captchaCode').textContent = generateCaptcha();
    document.getElementById('captchaInput').value = '';
  });

  // Tab switching
  document.querySelectorAll('.login-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.login-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // Sign in
  document.getElementById('signInBtn').addEventListener('click', () => {
    const userId = document.getElementById('userId').value;
    const captchaInput = document.getElementById('captchaInput').value;
    const captchaCode = document.getElementById('captchaCode').textContent;

    if (!userId) { alert('Please enter your User ID'); return; }
    if (captchaInput.toUpperCase() !== captchaCode) { alert('Incorrect captcha. Try again.'); return; }

    sessionStorage.setItem('loggedIn', 'true');
    sessionStorage.setItem('userId', userId);
    window.location.href = 'index.html';
  });

});