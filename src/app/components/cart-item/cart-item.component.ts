import {Input, Component} from '@angular/core';
import {Product} from '../../interfaces/product.interface';

@Component({
  selector: 'app-cart-item',
  template: `
    <div class="w-full py-4 px-8 flex">
      <img [src]="product.image" [alt]="product.name">
      <p>{{ product.name }}</p>
      <p>{{ product.price }}</p>
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
}
