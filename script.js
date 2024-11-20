function changeText() {
    document.getElementById('about').innerText = 'You clicked the button!';
}

// Script for handling the navbar active state
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Stops the default navigation behavior
            navLinks.forEach(link => link.classList.remove('active')); // Clear other active links
            this.classList.add('active'); // Set the clicked link as active
        });
    });
});

// Function to change text when the button is clicked
function changeText() {
    document.getElementById('about').innerText = 'You clicked the button!';
}
