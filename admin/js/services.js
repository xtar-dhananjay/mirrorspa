// this is for menu status bar
let allMenu = document.querySelectorAll('header nav ul li');
allMenu.forEach(e => {
    e.classList.remove('active');
})
allMenu[2].classList.add('active');

let allServices = document.getElementById('allServices');


let serviceHTML = '';
function getData(){
    fetch('php/services/getData.php')
    .then((Response) => Response.json())
    .then(data => {
        data.forEach( e => {
            
            serviceHTML += `<div class="services">
                            <a href=""><img src="../img/bestServices/${e.serviceImage}" alt="service-Photo Mirror Spa"></a>
                            <div class="serviceDetails">
                                <a href=""><h2>${e.serviceName}</h2></a>
                                <a href=""><p>${e.desc.length > 50 ?  e.desc.substring(0, 100) + '...' : e.desc}</p></a>
                                <p class="servicePrice">₹<span>${e.newPrice}</span> <span class="oldPrice"><strike>₹<span>${e.oldPrice}</span></strike></span></p>
                            </div>
                            <div class="servicesBtns">
                                <a href="updateServices.php?updateID=${e.serviceid}"><button>Update</button></a>
                                <a href="php/services/delete.php?deleteID=${e.serviceid}"><button class="deleteBtn">Delete</button></a>
                            </div>
                        </div>`;
        })
        allServices.innerHTML = serviceHTML;
    })
}

getData();