function changeText() {
    document.getElementById("about").innerHTML = "you clicked the button";
}

// Script for habing the navbar active state 
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // stops the defult navigtion behavior
            navLinks.forEach(link => link.classList.remove("active")); // clear other active link 
            this.classList.add("active"); // set the clicked link as active
        });
    });
});

// Function to change text when the button is clicked 
function changeText() {
    document.getElementById("about").innerHTML = "You clicked the button!";
}
