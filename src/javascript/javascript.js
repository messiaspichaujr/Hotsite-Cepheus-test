document.addEventListener('DOMContentLoaded', () => {
    const menuHamburguer = document.getElementById('menu-hamburguer');
    const mobileLinks = document.getElementById('mobile-links');

    menuHamburguer.addEventListener('click', () => {
        mobileLinks.classList.toggle('show');
    });
});
