// this is for menu status bar
let allMenu = document.querySelectorAll('header nav ul li');
allMenu.forEach(e => {
    e.classList.remove('active');
})
allMenu[3].classList.add('active');


// Form validation
let submitBtn = document.getElementById('submitBtn');
let contactName = document.getElementById('contactName');
let contactPhone = document.getElementById('contactPhone');
let contactEmail = document.getElementById('contactEmail');
submitBtn.onclick = (e) => {
    let contactStatus = false;
    e.preventDefault();

    // name
    if (contactName.value.length > 1) {
        contactStatus = true;

        // email
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(contactEmail.value)){

            // phone
            let numberRegex = /^[6-9]\d{9}$/;
            if (numberRegex.test(contactPhone.value)){
                contactStatus = true;
                
            }else{
                contactStatus = false;
                errMsg('Write a valid Phone number');
            }
            
        }else{
            contactStatus = false;
            errMsg('Write a valid Email');
        }        
        
    }else{
        contactStatus = false;
        errMsg('Write a Name');
    }

    if (contactStatus == true) {
        submitBtn.style.pointerEvents = "none";
        submitBtn.innerText = "Submitting";
        submitBtn.style.background = "lightgray";
        let contactForm = document.querySelector('#contactForm form');
        var formData = new FormData(contactForm);
        var jsonObject = {};

        for (var pair of formData.entries()) {
        jsonObject[pair[0]] = pair[1];
        }

        var jsonData = JSON.stringify(jsonObject);
        fetch('php/contact/contactInsert.php', {
            method: "POST",
            body: jsonData,
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then( Response => Response.json())
        .then( data => {
            if (data.status == "success") {
                contactForm.reset();
                sucMsg('Form Submitted Successfully');
            }else{
                errMsg('Server issue');
            }
            submitBtn.style.pointerEvents = "auto";
            submitBtn.innerText = "Submit";
            submitBtn.style.background = "var(--main-color)";
        })
    }

}