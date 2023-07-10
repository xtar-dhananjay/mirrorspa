document.addEventListener("DOMContentLoaded", width850)
document.addEventListener("DOMContentLoaded", width600)

function preWord(Slides){
    const swiper1 = new Swiper('.mySwiper1', {
        slidesPerView: Slides,
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 2000,
        },
    });
}

function width850(){
    let query = window.matchMedia("(max-width: 850px)");
    if (query.matches) {
        preWord(2);
    }else{
        preWord(3);

    }
}

function width600(){
    let query = window.matchMedia("(max-width: 600px)");
    if (query.matches) {
        preWord(1);
    }
}

// This is for customer review slider
var swiper2 = new Swiper(".mySwiper2", {
    effect: "Manipulation",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: true
    },
    loop: true,
    autoplay: {
        delay: 3000,
    },
  });

var swiper = new Swiper(".topSwiper", {
    effect: "Manipulation",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    autoplay: {
        delay: 3000,
    },
});