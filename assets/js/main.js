new Swiper('.news-swiper .swiper-container', {
  direction: 'horizontal',
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보임
  loop: true,
  autoplay: {
    delay: 5000
  }
});