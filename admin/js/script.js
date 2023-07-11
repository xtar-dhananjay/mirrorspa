let form = document.getElementById('form');
let username = document.getElementById('username');
let password = document.getElementById('password');
let submitBtn = document.getElementById('submitBtn');

submitBtn.onclick = (e) => {
    e.preventDefault();

    fetch(`php/session/create.php?username=${username.value}&password=${password.value}`)
    .then((Response) => Response.json())
    .then(data => {
        if (data.status == "failed") {
            errMsg(data.errorMessage);
        }else if(data.status == 'success'){
            sucMsg('Login Successfully');    
            window.location = "inquiry.php";
        }
    })
}