// Toggle Menu untuk Mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if(menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Efek Animasi Fade-in saat di-scroll (Mencegah tampilan kaku)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

const hiddenElements = document.querySelectorAll('.fade-in');
hiddenElements.forEach((el) => observer.observe(el));