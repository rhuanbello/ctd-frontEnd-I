const menu = document.querySelector('header.top .menu')
const asideMain = document.querySelector('main .menu')
const asideOpened = document.querySelector('.menu-show')
const bottomA = document.querySelectorAll('.bottom a')

menu.addEventListener('click', () => {
    asideMain.classList.toggle('hide');
    asideOpened.classList.toggle('hide');
})