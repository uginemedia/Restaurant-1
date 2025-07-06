const menu = document.querySelector('.menu');
const nav = document.querySelector('.header-container nav');

menu.addEventListener('click', () => {
    nav.classList.toggle('active');
});

const header = document.querySelector('header');

const scrollToTop = document.querySelector(".scroll-to-top")
window.addEventListener('scroll', () => {
    if(window.scrollY > 100) {
        header.classList.add('scrolled');
        scrollToTop.classList.add("scrolled");
    } else {
        header.classList.remove('scrolled');
         scrollToTop.classList.remove("scrolled")
    }

});