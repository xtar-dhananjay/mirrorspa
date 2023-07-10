let servicesBtns = document.querySelectorAll('#servicesItem button');

servicesBtns.forEach( e => {
    e.onclick = () => {
        inquiryForm.classList.toggle('active');
    }
})