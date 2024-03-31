import {loadTemplate} from './templateLoader.js';

document.addEventListener('DOMContentLoaded', async function () {
    await loadStructure();
});

async function loadStructure() {
    let indexDiv = document.getElementById('index');

    if (indexDiv != null) {
        indexDiv.appendChild(await loadTemplate('../components/slider.html'));
        initializeSlider();
        indexDiv.appendChild(await loadTemplate('../templates/main.html'));
    }
}

function initializeSlider() {
    const btnLeft = document.querySelector(".btn-left"),
        btnRight = document.querySelector(".btn-right"),
        slider = document.querySelector("#slider"),
        sliderSection = document.querySelectorAll(".slider-section");

    if (!btnLeft || !btnRight || !slider || !sliderSection) {
        console.error('One or more elements not found');
        return;
    }

    btnLeft.addEventListener("click", () => moveToLeft())
    btnRight.addEventListener("click", () => moveToRight())

    setInterval(() => {
        moveToRight()
    }, 10000);

    let operation = 0,
        counter = 0,
        widthImg = 100 / sliderSection.length;

    function moveToRight() {
        if (counter >= sliderSection.length - 1) {
            counter = 0;
            operation = 0;
            slider.style.transform = `translate(-${operation}%)`;
            slider.style.transition = "none";
            return;
        }
        counter++;
        operation = operation + widthImg;
        slider.style.transform = `translate(-${operation}%)`;
        slider.style.transition = "all ease .6s"
    }

    function moveToLeft() {
        counter--;
        if (counter < 0) {
            counter = sliderSection.length - 1;
            operation = widthImg * (sliderSection.length - 1)
            slider.style.transform = `translate(-${operation}%)`;
            slider.style.transition = "none";
            return;
        }
        operation = operation - widthImg;
        slider.style.transform = `translate(-${operation}%)`;
        slider.style.transition = "all ease .6s"
    }
}