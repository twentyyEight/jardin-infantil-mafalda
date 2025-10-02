const menuNav = document.querySelector('.menu-nav');
const menuList = document.querySelector('ul');
const overlay = document.querySelector('.overlay');
const menuLinks = document.querySelectorAll('ul a');

menuNav.addEventListener('click', () => {
    const isActive = menuList.classList.toggle('active');
    overlay.classList.toggle('active');

    if (isActive) {
        menuNav.innerHTML = '<p>Cerrar</p><img src="assets/cruz.png" alt="cruz" style="height: 15px;">';
    } else {
        menuNav.innerHTML = '<p>Menú</p><img src="assets/menu.png" alt="menu">';
    }
});

function NormalMenuBtn() {
    menuList.classList.remove('active');
    overlay.classList.remove('active');
    menuNav.innerHTML = '<p>Menú</p><img src="assets/menu.png" alt="menu">';
}

menuLinks.forEach(link => {
    link.addEventListener('click', NormalMenuBtn);
});

overlay.addEventListener('click', NormalMenuBtn);
