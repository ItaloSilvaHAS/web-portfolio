function createParticles() {
    const particlesContainer = document.querySelector('.particles-container');
    if (!particlesContainer) return;

    const particleCount = 80;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        const size = Math.random() * 1.5 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        particle.style.opacity = Math.random() * 0.5 + 0.3;
        
        const duration = Math.random() * 15 + 15;
        particle.style.animationDuration = duration + 's';
        
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        const drift = (Math.random() - 0.5) * 30;
        particle.style.setProperty('--drift', drift + 'px');
        
        particlesContainer.appendChild(particle);
    }
}

const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

window.addEventListener('DOMContentLoaded', () => {
    createParticles();
    
    const sections = document.querySelectorAll('.section-content');
    sections.forEach(section => {
        observer.observe(section);
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
