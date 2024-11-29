// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Cache DOM elements
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const aboutElement = document.getElementById('about');
    
    // Initialize the navigation
    initializeNavigation();
    
    // Handle button click events
    initializeButtons();

    // Function to initialize navigation
    function initializeNavigation() {
        if (!navbar) {
            console.error('Navbar not found!');
            return;
        }

        // Set active link based on current URL
        setActiveLink();

        // Add click event listener to navbar
        navbar.addEventListener('click', function(event) {
            if (event.target.classList.contains('nav-link')) {
                handleNavClick(event);
            }
        });
    }

    // Function to handle navigation clicks
    function handleNavClick(event) {
        event.preventDefault();
        
        // Remove active class from all links
        navLinks.forEach(link => link.classList.remove('active'));
        
        // Add active class to clicked link
        event.target.classList.add('active');
        
        // Smooth scroll to section if it exists
        const targetId = event.target.getAttribute('href')?.substring(1);
        if (targetId) {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    // Function to set active link based on URL
    function setActiveLink() {
        const currentPath = window.location.pathname;
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            }
        });
    }

    // Function to initialize button events
    function initializeButtons() {
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('click', function(event) {
                handleButtonClick(event);
            });
        });
    }

    // Function to handle button clicks
    function handleButtonClick(event) {
        const buttonId = event.target.id;
        
        switch(buttonId) {
            case 'changeTextBtn':
                changeText();
                break;
            // Add more button handlers here
            default:
                console.log('Button clicked:', buttonId);
        }
    }

    // Function to change text
    function changeText() {
        if (!aboutElement) {
            console.error('Element with ID "about" not found!');
            return;
        }
        
        try {
            aboutElement.innerText = 'You clicked the button!';
            // Add animation class if defined in CSS
            aboutElement.classList.add('text-changed');
        } catch (error) {
            console.error('Error changing text:', error);
        }
    }

    // Optional: Add window resize handler
    let resizeTimeout;
    window.addEventListener('resize', function() {
        // Debounce resize events
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            // Handle resize events here
            console.log('Window resized');
        }, 250);
    });
});
