import {Component, Input, Output} from '@angular/core';
import {ScrollService} from '../../services/scroll/scroll.service';

@Component({
  selector: 'app-product-item',
  template: `
    <a (click)="scrollService.scrollToTop()" [routerLink]="['/product', productId]" class="text-center">
      <img class="rounded-xl w-80 border-b border-gray-400" [src]="productImage" [alt]="productName">
      <p class="text-xl font-semibold">{{ productName }}</p>
      <p class="text-xl font-semibold">{{ productPrice }} €</p>
      <div class="flex justify-between px-4 py-2 border-t border-gray-400">
        <app-button [content]="'Añadir al carrito'" [icon]="'fa-solid fa-cart-plus'"></app-button>
        <app-button [action]="'/product/' + productId" [content]="'Detalles'"
                    [icon]="'fa-regular fa-file-lines'"></app-button>
      </div>
    </a>`
})
export class ProductItemComponent {
  @Output() @Input() productId: number = 0;
  @Input() productName: string = 'Product';
  @Input() productImage: string = 'https://th.bing.com/th/id/R.7493e5654057ed64161c7579703d56b4?rik=zhz13r4b96lqZA&pid=ImgRaw&r=0';
  @Input() productPrice: number = 0;
  @Input() productDescription: string = 'Description';

  constructor(public scrollService: ScrollService) {
  }
}
