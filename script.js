// Cria partículas de neve minimalistas
function createParticles() {
    const particlesContainer = document.querySelector('.particles-container');
    if (!particlesContainer) return;

    const particleCount = 80; // Número de partículas

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Posição inicial aleatória
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Tamanho variado (muito pequeno)
        const size = Math.random() * 1.5 + 1; // Entre 1px e 2.5px
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Opacidade variada
        particle.style.opacity = Math.random() * 0.5 + 0.3; // Entre 0.3 e 0.8
        
        // Velocidade variada
        const duration = Math.random() * 15 + 15; // Entre 15s e 30s
        particle.style.animationDuration = duration + 's';
        
        // Delay inicial variado
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        // Drift horizontal (movimento lateral suave)
        const drift = (Math.random() - 0.5) * 30; // Entre -15px e 15px
        particle.style.setProperty('--drift', drift + 'px');
        
        particlesContainer.appendChild(particle);
    }
}

// Intersection Observer para animar seções ao scroll
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

// Inicializa quando a página carregar
window.addEventListener('DOMContentLoaded', () => {
    // Cria as partículas
    createParticles();
    
    // Observa a seção "Sobre Mim"
    const sobreMimSection = document.querySelector('.section-content');
    if (sobreMimSection) {
        observer.observe(sobreMimSection);
    }
});

