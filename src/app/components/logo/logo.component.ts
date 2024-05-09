import {Component} from '@angular/core';
import {ScrollService} from "../../services/scroll/scroll.service";

@Component({
  selector: 'app-logo',
  template: '<a href="" (click)="scrollToTop()" class="flex items-center justify-start no-underline">\n' +
    '  <img alt="image" ngSrc="../../../assets/logo.svg" class="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 logo"\n' +
    '       height="80" width="80">\n' +
    '  <h1 class="pl-2 text-3xl sm:text-4xl lg:text-5xl font-bold logo-name">labrArte®</h1>\n' +
    '</a>\n',
})
export class LogoComponent {
  constructor(private scrollService: ScrollService) {
  }

  scrollToTop() {
    this.scrollService.scrollToTop();
  }
}
