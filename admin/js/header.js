let menuBtn = document.getElementById('menuBtn');
let menuBar = document.querySelector('header nav ul');
let homeBtn2 = document.querySelector('header nav ul li button');
let logoutBtn = document.getElementById('logoutBtn');

menuBtn.onclick = () => {
    menuBar.classList.toggle('active');
}

logoutBtn.onclick = () => {
    fetch(`php/session/deleteSession.php`)
    .then((Response) => Response.json())
    .then(data => {
        if(data.status == 'success'){
            sucMsg('Logout Successfully');    
            window.location = "index.php";
        }
    })
}