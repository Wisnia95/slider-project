const sliderElements = [...document.querySelectorAll(".tw-slider-element")];
const sliderDots = [...document.querySelectorAll(".tw-slider-dot")];

const handleSlider = function(){
    let activeItem = sliderElements.indexOf(this);
    console.log(activeItem);
}

const handleDots = function(){
    let activeDot = sliderDots.indexOf(this);
    console.log(activeDot);
}


sliderElements.forEach(item => item.addEventListener("click", handleSlider));

sliderDots.forEach(item => item.addEventListener("click", handleDots));