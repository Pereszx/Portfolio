
window.sr = ScrollReveal({ reset: true })

sr.reveal('#section1', { duration: 3000 })

sr.reveal('#section2', {
    duration: 1200,
    distance: '100px',
    delay: 600,
    origin: 'left'
});

/* section3 para cars */
// Inicializando ScrollReveal
ScrollReveal().reveal('.card-tec', {
    origin: 'top',
    distance: '50px',
    duration: 1000,
    delay: 200,
    interval: 300,
    easing: 'ease',
    opacity: 0,
    reset: true,
});

ScrollReveal().reveal('.project-card', {
    origin: 'top',
    distance: '50px',
    duration: 1000,
    delay: 200,
    interval: 400,
    easing: 'ease',
    opacity: 0,
    reset: true,
});

ScrollReveal().reveal('.service-card', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 200,
    interval: 400,
    easing: 'ease',
    opacity: 0,
    reset: true,
});