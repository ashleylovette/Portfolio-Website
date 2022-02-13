
const homeNav = document.getElementById('homeNav');
const aboutNav = document.getElementById('aboutNav');
const techStackNav = document.getElementById('techStackNav');
const portfolioNav = document.getElementById('portfolioNav');
const contactNav = document.getElementById('contactNav');
const navLinks = document.getElementsByClassName('nav-link')


// CLICK NAVIGATION

homeNav.addEventListener("click", e => {
    homeNav.classList.add("is-active");
    // remove other classes
    navLinks.classList.remove("is-active");
})

aboutNav.addEventListener("click", e => {
    aboutNav.classList.add("is-active");
        // remove other classes
    navLinks.classList.remove("is-active");

})

techStackNav.addEventListener("click", e => {
    techStackNav.classList.add("is-active");
    //     // remove other classes
    navLinks.classList.remove("is-active");

})

portfolioNav.addEventListener("click", e => {
    portfolioNav.classList.add("is-active");
        // remove other classes
    navLinks.classList.remove("is-active");

})

contactNav.addEventListener("click", e => {
    contactNav.classList.add("is-active");
        // remove other classes
    navLinks.classList.remove("is-active");

})