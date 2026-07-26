/*=========================================
        MOBILE NAVIGATION
=========================================*/

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Open / Close Menu

menuToggle.addEventListener("click", (e) => {

    e.stopPropagation();

    navLinks.classList.toggle("active");

});

// Close menu after clicking any link

document.querySelectorAll("#nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

// Close when clicking outside

document.addEventListener("click", (e) => {

    if (
        !menuToggle.contains(e.target) &&
        !navLinks.contains(e.target)
    ) {

        navLinks.classList.remove("active");

    }

});

// Close using ESC key

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        navLinks.classList.remove("active");

    }

});

// Close menu automatically on Desktop

window.addEventListener("resize", () => {

    if (window.innerWidth > 992) {

        navLinks.classList.remove("active");

    }

});

/*=========================================
        ACTIVE MENU LINK
=========================================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll("#nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active-link");

        }

    });

});