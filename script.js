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


// ScrollReveal Animation

//Reveal From Bottom
ScrollReveal().reveal('.scroll-bottom', {
    duration: 3000,
    origin: "bottom",
    distance: "50px",
    reset: true
});

//Reveal From Left
ScrollReveal().reveal('.scroll-left', {
    duration: 3000,
    origin: "left",
    distance: "100px",
    reset: true
});

//Zoom In
ScrollReveal().reveal('.zoom-in', {
    scale: 0.85,
    duration: 3000,
    reset: true
});

//Staggered
ScrollReveal().reveal('.staggered > div', {
  origin: 'bottom',
  distance: '100px',
  duration: 3000,
  interval: 200,
  reset: true
});
