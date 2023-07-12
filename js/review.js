let star1 = document.querySelector('#reviewStars .star1');
let star2 = document.querySelector('#reviewStars .star2');
let star3 = document.querySelector('#reviewStars .star3');
let star4 = document.querySelector('#reviewStars .star4');
let star5 = document.querySelector('#reviewStars .star5');
let submitBtn = document.getElementById('submitBtn');
let imgInput = document.getElementById('imgInput');


star1.onclick = () => {
    removeStar();
    star1.classList.add('active');
}
star2.onclick = () => {
    removeStar();
    star1.classList.add('active');
    star2.classList.add('active');
}
star3.onclick = () => {
    removeStar();
    star1.classList.add('active');
    star2.classList.add('active');
    star3.classList.add('active');
}
star4.onclick = () => {
    removeStar();
    star1.classList.add('active');
    star2.classList.add('active');
    star3.classList.add('active');
    star4.classList.add('active');
}
star5.onclick = () => {
    removeStar();
    star1.classList.add('active');
    star2.classList.add('active');
    star3.classList.add('active');
    star4.classList.add('active');
    star5.classList.add('active');
}

function removeStar(){
    let allStars = document.querySelectorAll('#reviewStars .star');
    allStars.forEach(e => {
        e.classList.remove('active');
    })
}

// validate img input
let fileStatus = true;
imgInput.onchange = () => {
    validateImageFile();
}
function validateImageFile() {
    let fileInput = document.getElementById('imgInput');
    let imgIcon = document.getElementById('userIcon');
    let userPicture = document.getElementById('userPicture');
    let imgBox = document.getElementById('imgBox');
    const file = fileInput.files[0];
  
    // Check if a file is selected
    if (!file) {
        errMsg('file not found');
        imgIcon.style.display = "block";
        userPicture.style.display = "none";
        imgBox.style.border = '1px solid red';
        userPicture.src = '';
        return false;
    }
    
    // Check the file type
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!allowedTypes.includes(file.type)) {
        fileStatus = false;
        errMsg('Please choose the JPG, JPEG & PNG pictures');
        imgBox.style.border = '1px solid red';
        imgIcon.style.display = "block";
        userPicture.style.display = "none";
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
            let userPicture = document.getElementById('userPicture');
            imgIcon.style.display = "none";
            userPicture.style.display = "block";
            imgBox.style.border = 'none';
            userPicture.src = imageURL;
        };
        reader.readAsDataURL(file);
    }
    
}


// submit form
submitBtn.onclick = (e) => {
    e.preventDefault();
    let userName = document.getElementById('userName');
    let userReview = document.getElementById('userReview');
    let fileInput = document.getElementById('imgInput');
    let allStars = document.querySelectorAll('#reviewStars .star');
    if (userName.value == '') {
        errMsg('Enter your Name');
    }else{
        if(userReview.value == ''){
            errMsg('Please write the review');
        }else{
            if (fileStatus == false) {
                fileInput.value = '';
            }
            let formData = new FormData();
            let selectedFile = fileInput.files[0];
            if (selectedFile) {
                formData.append('file', fileInput.files[0]);
            }else{
                console.log('not selected file');
            }
            formData.append('userName', userName.value);
            formData.append('userReview', userReview.value);
            let totalStar = 0;
            allStars.forEach( e => {
                if (e.classList.contains('active')) {
                    totalStar++;
                }
                
            })
            formData.append('starCount', totalStar);

            fetch('php/review/addReview.php', {
                method: "POST",
                body: formData
            })
            .then((response) => response.json())
            .then(data => {
                console.log(data);
                if (data.Status == "Successfully saved") {
                    console.log(data);
                    sucMsg('Successfully Submitted');
                    window.location = "thanks.php";
                }else{
                    errMsg('have a some problem');
                }


                
            });


        }
    }
}