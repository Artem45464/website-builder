// Script for handling navbar active state
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");

    // Restore active link from localStorage
    const activeLink = localStorage.getItem("activeNav");
    if (activeLink) {
        navLinks.forEach(link => {
            if (link.getAttribute("href") === activeLink) {
                link.classList.add("active");
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            // Check if the link is internal or external
            const isExternal = this.getAttribute("href").startsWith("http");

            if (!isExternal) {
                // Prevent default behavior for internal links
                event.preventDefault();
                navLinks.forEach(link => link.classList.remove("active")); // Remove old active class
                this.classList.add("active"); // Add active class to clicked link

                // Save active state in localStorage based on the link's href
                localStorage.setItem("activeNav", this.getAttribute("href"));
            }
        });
    });
});
