const menuIcon = document.querySelector('.menu-hamburguesa');
const header = document.querySelector('.header');
const aside = document.querySelector('.aside');

menuIcon.addEventListener('click', () => {
    header.classList.toggle('change');
    aside.classList.toggle('deslizar');

})