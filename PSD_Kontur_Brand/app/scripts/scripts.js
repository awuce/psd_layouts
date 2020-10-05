let images = ['slider1.png', 'slider1.png', 'slider1.png'];
const slider = document.getElementById("slider");
let numberSlide = 0;

function leftSlide() {
    const prev = numberSlide;
    if (numberSlide === 0) {
        numberSlide = images.length-1;
    } else {
        numberSlide--;
    }
    setSlide(prev, numberSlide);
}

function rightSlide() {
    const prev = numberSlide;
    if (numberSlide === images.length-1) {
        numberSlide = 0;
    } else {
        numberSlide++;
    }
    setSlide(prev, numberSlide);
}

function setSlide(prev, numberSlide) {
    slider.style.opacity = "0.8";
    setTimeout(() => {
        slider.style.opacity = "1";
    }, 100);
    slider.style.backgroundImage = "url('../images/" + images[numberSlide] +"')";

    const b1 = document.getElementById("button" + String(prev));
    b1.style.backgroundColor = "#566E98";
    const b2 = document.getElementById("button" + String(numberSlide));
    b2.style.backgroundColor = "#FFFFFF";
}