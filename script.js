// JavaScript para a responsividade da barra de navega~ão
const toggleButton = document.querySelector('.navbar-toggler');
const navItems = document.querySelector('.navbar-nav');

toggleButton.addEventListener('click', () => {
    navItems.classList.toggle('active');
});
