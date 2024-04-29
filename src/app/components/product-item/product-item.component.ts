import {Component, Input, Output} from '@angular/core';
import {ScrollService} from '../../services/scroll/scroll.service';

@Component({
  selector: 'app-product-item',
  template: `
    <a (click)="scrollService.scrollToTop()" [routerLink]="['/product', productId]" class="text-center">
      <img class="rounded-xl w-80 border-b border-gray-400" [src]="productImage" [alt]="productName">
      <p class="text-xl font-semibold">{{ productName }}</p>
      <p class="text-xl font-semibold">{{ productPrice }} €</p>
    </a>`
})
export class ProductItemComponent {
  @Output() @Input() productId: number = 0;
  @Input() productName: string = 'Product';
  @Input() productImage: string = 'https://th.bing.com/th/id/R.7493e5654057ed64161c7579703d56b4?rik=zhz13r4b96lqZA&pid=ImgRaw&r=0';
  @Input() productPrice: string = '0€';
  @Input() productDescription: string = 'Description';

  constructor(public scrollService: ScrollService) {
  }
}
