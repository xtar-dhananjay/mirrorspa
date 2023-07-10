let submitBtn = document.getElementById('submitBtn');
let textDisplay = document.getElementById('textDisplay');
let imgInput = document.getElementById('imgFile');
let imageBox = document.getElementById('imageBox');

// this is for menu status bar
let allMenu = document.querySelectorAll('header nav ul li');
allMenu.forEach(e => {
    e.classList.remove('active');
})
allMenu[2].classList.add('active');

// validate img input
let fileStatus = false;
imgInput.onchange = () => {
    validateImageFile();
}
function validateImageFile() {
    let fileInput = document.getElementById('imgFile');
    const file = fileInput.files[0];
  
    // Check if a file is selected
    if (!file) {
        errMsg('file not found');
        textDisplay.style.display = "block";
        displayImgs.style.display = "none";
        imageBox.style.border = '1px solid red';
        displayImgs.src = '';
        fileStatus = false;
        return false;
    }else{
        fileStatus = true;
    }
    
    // Check the file type
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!allowedTypes.includes(file.type)) {
        fileStatus = false;
        errMsg('Please choose the JPG, JPEG & PNG files');
        imageBox.style.border = '1px solid red';
        return false;
    }else{
        fileStatus = true; 
    }

    if (!fileStatus == true) {
        return false;
    }else{
        const reader = new FileReader();
        reader.onload = function (e) {
            const imageURL = e.target.result;
            let displayImgs = document.getElementById('displayImgs');
            textDisplay.style.display = "none";
            displayImgs.style.display = "block";
            imageBox.style.border = 'none';
            displayImgs.src = imageURL;
        };
        reader.readAsDataURL(file);
    }
    
}

let inputStatus = false;
submitBtn.onclick = (e) => {
    let serviceTitle = document.getElementById('serviceTitle');
    let servicePrice = document.getElementById('servicePrice');
    let OfferPrice = document.getElementById('OfferPrice');
    let serviceDescription = document.getElementById('serviceDescription');
    let permalink = document.getElementById('permalink');
    let serviceBenefits = document.getElementById('serviceBenefits');
    let fileInput = document.getElementById('imgFile');

    if (validateInputs(serviceTitle)) {
        if (validateInputs(servicePrice)) {
            if (validateInputs(OfferPrice)) {
                if (validateInputs(serviceDescription)) {
                    if (validateInputs(serviceBenefits)) {
                        if (validatePermalink(permalink)) {
                            inputStatus = true;                       
                        }else{
                            inputStatus = false;                       
                        }
                    }else{
                        inputStatus = false;                       
                    }         
                }else{
                    inputStatus = false;                       
                }     
            }else{
                inputStatus = false;                          
            }
        }else{
            inputStatus = false;
        }
    }else{
        inputStatus = false;                       
    }

    
    e.preventDefault()
    if (fileStatus === false) {
        imageBox.style.border = '1px solid red';
    }else{
        imageBox.style.border = 'none';
        imageBox.style.border = 'none';

        if (inputStatus == true) {
            let serviceForm = document.querySelector('#addServices form');
            let formData = new FormData();
          
            formData.append('file', fileInput.files[0]);
            console.log(fileInput);
            formData.append('serviceTitle', serviceTitle.value);
            formData.append('servicePrice', servicePrice.value);
            formData.append('OfferPrice', OfferPrice.value);
            formData.append('serviceDescription', serviceDescription.value);
            formData.append('permalink', permalink.value);
            formData.append('serviceBenefits', serviceBenefits.value);
          
            fetch('php/services/addServices.php', {
              method: "POST",
              body: formData
            })
            .then((response) => response.json())
            .then(data => {
                if (data.Status == "Successfully saved") {
                    sucMsg('Successfully Submitted');
                    window.location = "services.php";
                }else if(data.Status == "Permalink is already exist"){
                    errMsg('This permalink is already exist');
                }else{
                    errMsg('have a some problem');
                }
            });
        }
    }
}

function validateInputs(input){
    if (input.value == '') {
        input.style.border = '1px solid red';
        return false;
    }else{
        input.style.border = '1px solid lightgray'
        return true;
    }
}

// validate the permalink
function validatePermalink(permalink) {
    const permalinkRegex = /^[a-z0-9-]+$/;
  
    if (!permalinkRegex.test(permalink.value)) {
        permalink.style.border = '1px solid red';
        errMsg('invalid permalink');
        return false;
    }else{
        permalink.style.border = '1px solid lightgray';
        return true;
    }
}