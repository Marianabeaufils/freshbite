const btnLeft = document.querySelector(".btn-left"),
      btnRight = document.querySelector(".btn-right"),
      slider = document.querySelector("#slider"),
      sliderSection = document.querySelectorAll(".slider-section");


btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())

setInterval(() => {
    moveToRight()
}, 3000);


let operacion = 0,
    counter = 0,
    widthImg = 100 / sliderSection.length;

function moveToRight() {
    if (counter >= sliderSection.length-1) {
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    counter++;
    operacion = operacion + widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
    
}  

function moveToLeft() {
    counter--;
    if (counter < 0 ) {
        counter = sliderSection.length-1;
        operacion = widthImg * (sliderSection.length-1)
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    operacion = operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
    
    
} 
let collapsibles = document.querySelectorAll('.faq-container')

collapsibles.forEach(element => {
    element.addEventListener("click", () =>{
        element.querySelector('.faq-answer').classList.toggle('open');
        element.querySelector('.question').classList.toggle('active');
        element.querySelector('.arrow-container').classList.toggle('up');
    })
});

// script.js

// Mostrar el botón cuando se desplaza hacia abajo 20px desde la parte superior de la página
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const btnTop = document.getElementById("btnTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
}

// Función para desplazarse hacia arriba
function goToTop() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}
