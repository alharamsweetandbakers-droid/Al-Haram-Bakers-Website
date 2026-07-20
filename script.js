const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
// Scroll To Top Button

const scrollTop = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        scrollTop.classList.add("show");

    }else{

        scrollTop.classList.remove("show");

    }

});