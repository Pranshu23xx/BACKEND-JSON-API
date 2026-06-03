// Set initials from logged in user
const userId = sessionStorage.getItem('userId');
if (userId) {
  // Take first character and uppercase them
  const initials = userId.substring(0, 1).toUpperCase();

  // Update both avatar elements in the dashboard
  document.querySelectorAll('.user-avatar, [style*="border-radius:50%"]').forEach(el => {
    el.textContent = initials;
  });

  // Update the name shown in sidebar
  const userName = document.querySelector('.user-name');
  if (userName) userName.textContent = userId;
}

document.addEventListener('DOMContentLoaded', () => {

  // Animate progress bar on load
  const fill = document.getElementById('progressFill');
  if (fill) {
    setTimeout(() => { fill.style.width = '70%'; }, 300);
  }

  // Copy button for MCP install command
  const copyBtn = document.getElementById('copyBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('uv pip install finsentry-mcp');
      copyBtn.textContent = 'Copied!';
      setTimeout(() => { copyBtn.textContent = 'Copy'; }, 1500);
    });
  }

  // Sidebar active link highlight
  const sidebarLinks = document.querySelectorAll('.sidebar-item');
  sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
      sidebarLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

});