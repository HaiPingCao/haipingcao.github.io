// Wait until DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select the theme toggle button
    const themeToggleBtn = document.querySelector('.toggle-theme-btn');
    
    // Check if there's a saved theme preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    
    // Apply the saved theme if it exists
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark-theme');
        themeToggleBtn.textContent = '☀️'; // Sun emoji for switching to light mode
    }
    
    // Add click event listener to the theme toggle button
    themeToggleBtn.addEventListener('click', function() {
        // Toggle the dark-theme class on the root element
        document.documentElement.classList.toggle('dark-theme');
        
        // Update the button text based on the current theme
        if (document.documentElement.classList.contains('dark-theme')) {
            themeToggleBtn.textContent = '☀️'; // Sun emoji for switching to light mode
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggleBtn.textContent = '🌙'; // Moon emoji for switching to dark mode
            localStorage.setItem('theme', 'light');
        }
    });
});