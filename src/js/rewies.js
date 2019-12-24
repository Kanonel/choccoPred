/* Индекс слайда по умолчанию */
var slideIndex = 1;
showListSlides(slideIndex);

/* Устанавливает текущий слайд */
function openSlide(n) {
    showListSlides(slideIndex = n);
    event.preventDefault();
}

/* Основная функция слайдера */
function showListSlides(n) {
    var i;
    var slider = document.getElementsByClassName("reviews__block");
    var dots = document.getElementsByClassName("people__link");
    if (n > slider.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slider.length
    }
    for (i = 0; i < slider.length; i++) {
        slider[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slider[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
}