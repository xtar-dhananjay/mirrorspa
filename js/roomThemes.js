// this is for menu status bar
let allMenu = document.querySelectorAll('header nav ul li');

allMenu.forEach(e => {
    e.classList.remove('active');
})
allMenu[4].classList.add('active');