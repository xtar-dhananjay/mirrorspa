// this is for menu status bar
let allMenu = document.querySelectorAll('header nav ul li');
let homeBtn3 = document.querySelector('#aContactInfo button');
allMenu.forEach(e => {
    e.classList.remove('active');
})
allMenu[1].classList.add('active');


// open inquiry form
homeBtn3.onclick = () => {
    inquiryForm.classList.toggle('active');
}