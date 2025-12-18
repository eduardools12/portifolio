/// Menu Mobile
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});
// Animação das barras de skill ao scrollar
const skillBars = document.querySelectorAll('.skill-progress');
const aboutSection = document.getElementById('about');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            skillBars.forEach(bar => {
                bar.style.width = bar.style.width;
            });
        }
    });
});
observer.observe(aboutSection);
// Formulário de contato
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Mensagem enviada! Obrigado pelo contato.');
    e.target.reset();
});
const img = document.getElementById("img");
    const opcoes = document.getElementById("opcoes");

    img.onclick = () => {
        opcoes.style.display =
        opcoes.style.display === "flex" ? "none" : "flex";
};