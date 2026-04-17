const themeBtn = document.getElementById('theme-btn');
const themeIcon = themeBtn.querySelector('i');
const body = document.body;

/**
 * Updates the icon based on the current theme mode
 * @param {boolean} isLight 
 */
function updateIcon(isLight) {
    if (isLight) {
        themeIcon.className = 'fas fa-sun';
        themeIcon.style.color = '#ff9500'; // Sun color
    } else {
        themeIcon.className = 'fas fa-moon';
        themeIcon.style.color = ''; // Default moon color
    }
}

// Event listener for the toggle button
themeBtn.addEventListener('click', () => {
    // Toggle the class on body
    body.classList.toggle('light-mode');
    
    // Check if light mode is active
    const isLight = body.classList.contains('light-mode');
    
    // Save the user preference
    localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
    
    // Update the visual icon
    updateIcon(isLight);
});

// Load the user preference on page startup
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        updateIcon(true);
    }
});