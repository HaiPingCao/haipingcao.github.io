// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get reference to the toggle button
    const toggleButton = document.querySelector('.toggle-theme-btn');
    
    // Define color schemes
    const lightTheme = {
        '--BackgroundColor': '#fdd6b2',
        '--ShadowColor': 'rgba(0, 0, 0, 0.1)',
        '--TextColor': 'rgb(0, 0, 0)',
        '--DebugColor': 'red',
        '--PageBackground': '#fff5e6',
        '--CardBackground': '#fff0d9',
        '--AccentColor': '#ff9d4d',
        '--BorderColor': '#ffbb80',
        '--HoverColor': '#ffb266'
    };
    
    const darkTheme = {
        '--BackgroundColor': '#2d2d2d',
        '--ShadowColor': 'rgba(255, 255, 255, 0.1)',
        '--TextColor': '#f5f5f5',
        '--DebugColor': 'blue',
        '--PageBackground': '#121212',
        '--CardBackground': '#1e1e1e',
        '--AccentColor': '#ff7700',
        '--BorderColor': '#444444',
        '--HoverColor': '#ff9d4d'
    };
    
    // Check for saved theme preference in localStorage
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    
    // Apply saved theme or default to light theme
    if (isDarkMode) {
        applyTheme(darkTheme);
        toggleButton.textContent = '☀️'; // Sun icon for light mode
    }
    
    // Function to apply theme by setting CSS variables
    function applyTheme(theme) {
        for (const [property, value] of Object.entries(theme)) {
            document.documentElement.style.setProperty(property, value);
        }
    }
    
    // Add click event listener to toggle button
    toggleButton.addEventListener('click', function() {
        // Check current mode by looking at background color
        const currentBgColor = getComputedStyle(document.documentElement)
            .getPropertyValue('--BackgroundColor').trim();
        
        // Toggle between dark and light mode
        if (currentBgColor === lightTheme['--BackgroundColor'] || 
            currentBgColor === '') {
            // Switch to dark mode
            applyTheme(darkTheme);
            toggleButton.textContent = '☀️'; // Change to sun icon
            localStorage.setItem('darkMode', 'enabled');
        } else {
            // Switch to light mode
            applyTheme(lightTheme);
            toggleButton.textContent = '🌙'; // Change to moon icon
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});