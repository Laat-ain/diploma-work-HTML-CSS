const burger = document.querySelector('.burger-menu'); // кнопка бургер меню
const menuList = document.querySelector('#menu'); // меню

burger.addEventListener('click', () => {
  menuList.classList.toggle('active');
})