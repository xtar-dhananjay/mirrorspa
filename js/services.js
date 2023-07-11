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


let allServices = document.getElementById('servicesBox');
let serviceHTML = '';
function getData(){
    fetch('php/services/getData.php')
    .then((Response) => Response.json())
    .then(data => {
        console.log(data);
        data.forEach( e => {
            
            serviceHTML += `<div class="service">
                                <a href="singleServices.php?dataID=${e.serviceid}"><img src="img/bestServices/${e.serviceImage}" alt="Mirror spa Services"></a>
                                <div class="serviceDetails">
                                    <a href="singleServices.php?dataID=${e.serviceid}"><h2>${e.serviceName}</h2></a>
                                    <a href="singleServices.php?dataID=${e.serviceid}"><p class="serviceDesc">${e.desc.length > 50 ?  e.desc.substring(0, 100) + '...' : e.desc}</p></a>
                                    <p class="servicePrice">₹<span>${e.newPrice}</span> <span class="oldPrice"><strike>₹<span>${e.oldPrice}</span></strike></span></p>
                                    <button onclick="inquiryForm.classList.toggle('active');">Book Now</button>
                                </div>
                            </div>`;
        })
        allServices.innerHTML = serviceHTML;
    })
}

getData();