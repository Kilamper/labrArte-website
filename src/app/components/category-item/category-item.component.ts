// src/app/components/category-cart/category-cart.component.ts
import {Component, Input} from '@angular/core';
import {ScrollService} from '../../services/scroll/scroll.service';

interface Category {
  categoryId: number;
  categoryName: string;
  categoryImage: string;
}

@Component({
  selector: 'app-category-item',
  template: `
    <a (click)="scrollService.scrollToTop()" [routerLink]="['/category', category.categoryId]" class="text-center">
      <img class="rounded-xl w-80 border border-gray-400" [src]="category.categoryImage" [alt]="category.categoryName">
      <p class="text-xl font-semibold">{{ category.categoryName }}</p>
    </a>
  `
})
export class CategoryItemComponent {
  @Input() category: Category = {
    categoryId: 0,
    categoryName: 'Category',
    categoryImage: 'https://th.bing.com/th/id/R.7493e5654057ed64161c7579703d56b4?rik=zhz13r4b96lqZA&pid=ImgRaw&r=0'
  };

  constructor(public scrollService: ScrollService) {
  }
}
