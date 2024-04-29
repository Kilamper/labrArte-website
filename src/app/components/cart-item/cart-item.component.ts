import {Input, Component} from '@angular/core';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-cart-item',
  template: ''
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
