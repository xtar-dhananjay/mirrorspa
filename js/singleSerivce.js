// this is for menu status bar
let allMenu = document.querySelectorAll('header nav ul li');

allMenu.forEach(e => {
    e.classList.remove('active');
})
allMenu[2].classList.add('active');


function getData(){
    let benefitsLi = '';
    let dataID = document.getElementById('dataID').value;
    fetch(`php/services/getSingleData.php?dataID=${dataID}`)
    .then((Response) => Response.json())
    .then(data => {
        let serviceTitle = document.getElementById('serviceTitle');
        let serviceDesc = document.getElementById('serviceDesc');
        let serviceNewPrice = document.getElementById('serviceNewPrice');
        let servicesOldPrice = document.getElementById('servicesOldPrice');
        let sreviceImg = document.getElementById('sreviceImg');
        let listOfBenefits = document.getElementById('listOfBenefits');
        serviceTitle.innerText = data[0].serviceName;
        serviceDesc.innerText = data[0].desc;
        serviceNewPrice.innerText = data[0].newPrice;
        servicesOldPrice.innerText = data[0].oldPrice;
        sreviceImg.src = 'img/bestServices/' + data[0].serviceImage;
        let benefitsData = data[0].benefits;
        let aryList = benefitsData.split(",");
        aryList.forEach( e => {
            benefitsLi += `<li>${e}</li>`;
        })
        listOfBenefits.innerHTML = benefitsLi;
    })
}
getData();

let allServices = document.getElementById('innerAllServices');
let serviceHTML = '';
function allGetData(){
    let dataID = document.getElementById('dataID').value;
    fetch('php/services/getData.php')
    .then((Response) => Response.json())
    .then(data => {
        console.log(data);
        data.forEach( e => {
            if (dataID != e.serviceid) {
                serviceHTML += `<div class="services">
                                    <a href="singleServices.php?dataID=${e.serviceid}"><img src="img/bestServices/${e.serviceImage}" alt="Mirror Spa Pitampura"></a>
                                    <div class="serviceDetails">
                                        <a href="singleServices.php?dataID=${e.serviceid}"><h2>Mirror spa services</h2></a>
                                        <button onclick="inquiryForm.classList.toggle('active');">Book Now</button>
                                    </div>
                                </div>`;
            }
        })
        allServices.innerHTML = serviceHTML;
    })
}

allGetData();