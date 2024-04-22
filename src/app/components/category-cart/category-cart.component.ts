// src/app/components/category-cart/category-cart.component.ts
import {Component, Input} from '@angular/core';
import {ScrollService} from '../../services/scroll/scroll.service';

@Component({
  selector: 'app-category-cart',
  template: `
    <a (click)="scrollService.scrollToTop()" [routerLink]="['/category', categoryId]" class="text-center">
      <img class="rounded-xl w-80 border border-gray-400" [src]="categoryImage" alt="categoryName">
      <p class="text-xl font-semibold">{{ categoryName }}</p>
    </a>
  `
})
export class CategoryCartComponent {
  @Input() categoryId: number = 0;
  @Input() categoryName: string = 'Category';
  @Input() categoryImage: string = 'https://th.bing.com/th/id/R.7493e5654057ed64161c7579703d56b4?rik=zhz13r4b96lqZA&pid=ImgRaw&r=0';

  constructor(public scrollService: ScrollService) {
  }
}
