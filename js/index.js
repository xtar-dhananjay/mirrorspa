let servicesBtns = document.querySelectorAll('#servicesItem button');

servicesBtns.forEach( e => {
    e.onclick = () => {
        inquiryForm.classList.toggle('active');
    }
})

console.log('this is working now');

let servicesBox = document.getElementById('servicesItem');
let allServicesData = '';
function getServices(){
    fetch('php/index/getServices.php')
    .then((Response) => Response.json())
    .then(data => {
        data.forEach( e => {
            allServicesData += `<div class="serItem">
                                        <a href="singleServices.php?dataID=${e.serviceid}"><img src="img/bestServices/${e.serviceImage}" alt="Best Spa Services in delhi, Mirror spa, Best spa in Delhi, pitampura, luxury spa">
                                            </a><div class="itemDetails"><a href="singleServices.php?dataID=${e.serviceid}">
                                        </a>
                                        <a href="singleServices.php?dataID=${e.serviceid}">
                                            <h2>${e.serviceName}</h2>
                                        </a>
                                        <a href="singleServices.php?dataID=${e.serviceid}">
                                            <p>${e.desc}</p>
                                        </a>
                                        <h3><span>₹</span>${e.newPrice} <span class="oldPrice"><strike>₹<span>${e.oldPrice}</span></strike></span></h3>
                                        <button onclick="inquiryForm.classList.toggle('active');">Book Now</button>
                                    </div>
                                </div>`;
        })
        servicesBox.innerHTML = allServicesData;
    })
}
getServices();


// Get all reviews

let reviewBox = document.querySelector('#reviewBox .allReviewBox');
let allReviews = '';
function getReviews(){
    fetch('php/index/getReviews.php')
    .then((Response) => Response.json())
    .then(data => {
        console.log(data);
        data.forEach( e => {
            allReviews += `<div class="swiper-slide cusReview swiper-slide-active" role="group" aria-label="2 / 2"
                            data-swiper-slide-index="1">
                            <div class="customerProfile">
                                <img src="img/reviews/${e.customerImg}"
                                    alt="customer-Photo | Motriqs best web development company in delhi, shadipur, patel nagar Bsuiness website, ecommerce website, landing page website">
                                <div class="personDetails">
                                    <h3>${e.customerName}</h3>
                                    <p>${e.reviewTiming}</p>
                                </div>
                            </div>
                            <p class="customerTypes">${e.customerDesc}</p>`

                            if (e.customerStar == 1) {
                                allReviews += `<div class="Ratings">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </div>`;
                            }else if(e.customerStar == 2){
                                allReviews += `<div class="Ratings">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </div>`;
                                
                            }else if(e.customerStar == 3){
                                allReviews += `<div class="Ratings">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </div>`;
                                
                            }else if(e.customerStar == 4){
                                allReviews += `<div class="Ratings">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </div>`;

                            }else if(e.customerStar == 5){
                                allReviews += `<div class="Ratings">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>`;

                            }
                        allReviews += `</div>`;
            reviewBox.innerHTML = allReviews;
        })
    })
}
getReviews();