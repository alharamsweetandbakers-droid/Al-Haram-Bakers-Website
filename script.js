/*==================================================
            WEBSITE JAVASCRIPT
==================================================*/

/*==================================================
            MOBILE NAVIGATION
==================================================*/

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    /* Open / Close Menu */

    menuToggle.addEventListener("click", (e) => {

        e.stopPropagation();

        navLinks.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            navLinks.classList.contains("active")
        );

    });

    /* Close After Clicking Link */

    document.querySelectorAll("#nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

    /* Click Outside */

    document.addEventListener("click", (e) => {

        if (

            !menuToggle.contains(e.target) &&
            !navLinks.contains(e.target)

        ) {

            navLinks.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

        }

    });

    /* ESC Key */

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {

            navLinks.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

        }

    });

    /* Desktop Resize */

    window.addEventListener("resize", () => {

        if (window.innerWidth > 992) {

            navLinks.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

        }

    });

}

/*==================================================
            ACTIVE NAVIGATION
==================================================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll("#nav-links a");

function updateActiveMenu() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 140;
        const sectionHeight = section.offsetHeight;

        if (

            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight

        ) {

            currentSection = section.id;

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active-link");

        }

    });

}

window.addEventListener("scroll", updateActiveMenu);

window.addEventListener("load", updateActiveMenu);

/*==================================================
        FUTURE PRODUCTS GALLERY
==================================================*/

/*
    Future Version

    Product Popup
    Product Gallery
    Product Slider
    Product Details

    JavaScript will be added here.
*/