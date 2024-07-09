import {Component, OnInit} from '@angular/core';
import {LoadService} from "../../services/load/load.service";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styles: [`
    .carruseles {
      width: 400%;
    }

    .slider-section {
      width: calc(100% / 4);
    }
  `]
})
export class SliderComponent implements OnInit {
  displayData: any[] = [];
  numberOfSlides: number = 0;

  constructor(private loadService: LoadService) {
  }

  ngOnInit(): void {
    this.loadService.loadContent('/slider').subscribe((data: any) => {
      this.numberOfSlides = data.length;
      this.displayData = data;

      // Wait for the data to be loaded and the view to be updated
      setTimeout(() => {
        this.initializeSlider();
      }, 0);
    });
  }

  initializeSlider(): void {
    const btnLeft = document.querySelector(".btn-left") as HTMLElement,
      btnRight = document.querySelector(".btn-right") as HTMLElement,
      slider = document.querySelector("#slider") as HTMLElement,
      sliderSection = document.querySelectorAll(".slider-section");

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
