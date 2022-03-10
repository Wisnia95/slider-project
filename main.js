const sliderElements = [...document.querySelectorAll(".tw-slider-element")];
const sliderDots = [...document.querySelectorAll(".tw-slider-dot")];


const handleDots = function(){
    let activeDot = sliderDots.indexOf(this);
    console.log(activeDot);
}


sliderDots.forEach(item => item.addEventListener("click", handleDots));



const slider = function () {
    const slides = document.querySelectorAll(".tw-slider-element");
    const btnLeft = document.querySelector('.slider__btn--left');
    const btnRight = document.querySelector('.slider__btn--right');
  
    let curSlide = 0;
    const maxSlide = slides.length;
  
    const goToSlide = function (slide) {
      slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
      );
    };
  
    // Next slide
    const nextSlide = function () {
      if (curSlide === maxSlide -1) {
        curSlide = 0;
      } else {
        curSlide++;
      }
  
      goToSlide(curSlide);
    };
  
    const prevSlide = function () {
      if (curSlide === 0) {
        curSlide = maxSlide - 1;
      } else {
        curSlide--;
      }
      goToSlide(curSlide);
      console.log(curSlide);
    };
  
    const init = function () {
      goToSlide(0);
    };
    init();
  
    // Event handlers
    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);
  
    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') prevSlide();
      e.key === 'ArrowRight' && nextSlide();
    });
  };
  slider();