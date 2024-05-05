import {Input, Component, Output, EventEmitter} from '@angular/core';
import {Product} from '../../interfaces/product.interface';

@Component({
  selector: 'app-cart-item',
  template: `
    <div class="w-full py-4 px-8 mb-2 flex border items-center justify-between">
      <img class="w-20 h-20" [src]="product.image" [alt]="product.name">
      <p class="text-left text-lg">{{ product.name }}</p>
      <p class="text-left text-lg">{{ product.price }} €</p>
      <a class="cursor-pointer" (click)="removeProduct()"><i class="fa-solid fa-trash"></i></a>
    </div>
  `,
})

export class CartItemComponent {
  @Input() product: Product = {
    id: 0,
    name: 'Product',
    image: 'https://th.bing.com/th/id/R.7493e5654057ed64161c7579703d56b4?rik=zhz13r4b96lqZA&pid=ImgRaw&r=0',
    price: 0,
    description: 'Description'
  }
  @Input() documentId: string = ''
  @Output() remove: EventEmitter<string> = new EventEmitter<string>()

  removeProduct() {
    this.remove.emit(this.documentId);
  }
}
