// Theme initialization script - MUST run early to prevent flash
(function() {
  // Read theme from localStorage
  const theme = localStorage.getItem('theme') || 'dark';

  // Update document class immediately
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  }

  // Update meta theme-color tag
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    // Dark theme: #FC5855 (red primary), Light theme: #03A7AA (teal primary)
    const themeColor = theme === 'dark' ? '#FC5855' : '#03A7AA';
    metaThemeColor.setAttribute('content', themeColor);
  }
})();
