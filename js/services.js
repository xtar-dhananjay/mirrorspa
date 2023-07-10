// this is for menu status bar
let allMenu = document.querySelectorAll('header nav ul li');
let allservicesPageBtns = document.querySelectorAll('#servicesBox button');

allMenu.forEach(e => {
    e.classList.remove('active');
})
allMenu[2].classList.add('active');


// open inquiry form
allservicesPageBtns.onclick = () => {
    inquiryForm.classList.toggle('active');
}
