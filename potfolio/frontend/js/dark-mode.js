document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
    const footerThemeToggle = document.getElementById('footer-theme-toggle');
    const darkModeStyle = document.getElementById('dark-mode-style');
    
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        enableDarkMode();
    }
    
    // Toggle dark mode
    function toggleDarkMode() {
        if (darkModeStyle.disabled) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    }
    
    function enableDarkMode() {
        darkModeStyle.disabled = false;
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        mobileThemeToggle.innerHTML = '<i class="fas fa-sun"></i> Toggle Theme';
        footerThemeToggle.innerHTML = '<i class="fas fa-sun"></i> Toggle Theme';
        localStorage.setItem('theme', 'dark');
    }
    
    function disableDarkMode() {
        darkModeStyle.disabled = true;
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        mobileThemeToggle.innerHTML = '<i class="fas fa-moon"></i> Toggle Theme';
        footerThemeToggle.innerHTML = '<i class="fas fa-moon"></i> Toggle Theme';
        localStorage.setItem('theme', 'light');
    }
    
    // Event listeners for all theme toggles
    themeToggle.addEventListener('click', toggleDarkMode);
    mobileThemeToggle.addEventListener('click', toggleDarkMode);
    footerThemeToggle.addEventListener('click', toggleDarkMode);
});