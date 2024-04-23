import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
    const btnLeft = document.querySelector(".btn-left") as HTMLElement,
      btnRight = document.querySelector(".btn-right") as HTMLElement,
      slider = document.querySelector("#slider") as HTMLElement,
      sliderSection = document.querySelectorAll(".slider-section");

    if (!btnLeft || !btnRight || !slider || !sliderSection) {
      console.error('One or more elements not found');
      return;
    }

    btnLeft.addEventListener("click", () => moveToLeft());
    btnRight.addEventListener("click", () => moveToRight());

    setInterval(() => {
      moveToRight();
    }, 10000);

    let operation = 0,
      counter = 0,
      widthImg = 100 / sliderSection.length;

    function moveToRight(): void {
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
      slider.style.transition = "all ease .6s";
    }

    function moveToLeft(): void {
      counter--;
      if (counter < 0) {
        counter = sliderSection.length - 1;
        operation = widthImg * (sliderSection.length - 1);
        slider.style.transform = `translate(-${operation}%)`;
        slider.style.transition = "none";
        return;
      }
      operation = operation - widthImg;
      slider.style.transform = `translate(-${operation}%)`;
      slider.style.transition = "all ease .6s";
    }
  }
}
