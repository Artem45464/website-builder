// Function to change text when the button is clicked
function changeText() {
    const aboutElement = document.getElementById('about');
    if (aboutElement) {
        aboutElement.innerText = 'You clicked the button!';
    } else {
        console.error('Element with ID "about" not found!');
    }
}

// Script for handling the navbar active state
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navbar) {
        navbar.addEventListener('click', function (event) {
            if (event.target.classList.contains('nav-link')) {
                event.preventDefault(); // Stops the default navigation behavior

                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));

                // Add active class to the clicked link
                event.target.classList.add('active');
            }
        });
    } else {
        console.error('Navbar not found!');
    }
});
