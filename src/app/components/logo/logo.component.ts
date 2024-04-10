import {Component} from '@angular/core';

@Component({
  selector: 'app-logo',
  template: '<a href="" (click)="scrollToTop()" class="flex items-center justify-start no-underline">\n' +
    '  <img alt="image" ngSrc="../../../assets/logo.svg" class="w-12 h-12 lg:w-16 lg:h-16 logo"\n' +
    '       height="80" width="80">\n' +
    '  <h1 class="pl-2 text-4xl font-bold lg:text-5xl logo-name">labrArte®</h1>\n' +
    '</a>\n',
})
export class LogoComponent {
  scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
