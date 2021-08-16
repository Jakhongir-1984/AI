

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

const sr = ScrollReveal({
  distance: '40px',
  duration: 2800,
  reset: true,
})


sr.reveal (`.home__data, .about__img, .blog__data-item`,{
  origin: 'left',
})

sr.reveal (`.home__img, .about__data, .blog__img`,{
  origin: 'right',
  interval: 100,
})

sr.reveal (`.group, .mySwiper, .footer`,{
  origin: 'bottom',
  interval: 100,
})