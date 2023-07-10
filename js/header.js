let menuBtn = document.getElementById('menuBtn');
let menuBar = document.querySelector('header nav ul');
let homeBtn2 = document.querySelector('header nav ul li button');

menuBtn.onclick = () => {
    menuBar.classList.toggle('active');
}

// open inquiry form
homeBtn2.onclick = () => {
    inquiryForm.classList.toggle('active');
}