// Simulação de Detecção de Live (Substitua por API real da Twitch)
// Para produção, use Twitch API com chave.
const isLive = Math.random() > 1.0; // Simulação: 50% chance de live
const liveContent = document.getElementById('live-content');
const offlineContent = document.getElementById('offline-content');
const banner = document.getElementById('banner');
const liveFloat = document.getElementById('live-float');

if (isLive) {
    liveContent.style.display = 'block';
    offlineContent.style.display = 'none';
    liveFloat.classList.add('live');
} else {
    liveContent.style.display = 'none';
    offlineContent.style.display = 'block';
    banner.style.display = 'none';
}

// Partículas Leves
const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 6 + 's';
    particle.style.width = particle.style.height = Math.random() * 5 + 2 + 'px';
    particlesContainer.appendChild(particle);
}

// Scroll Animations (Simples)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
});
document.querySelectorAll('section > .container').forEach(el => observer.observe(el));

// Hover Preview (Simulação para Twitch)
// Para preview real, use Twitch API.
document.querySelector('#live-status iframe').addEventListener('mouseenter', () => {
    // Simulação: Mostrar mini preview (placeholder)
    console.log('Preview da live');

});
