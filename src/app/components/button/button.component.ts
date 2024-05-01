import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {CartService} from '../../services/cart/cart.service';

@Component({
  selector: 'app-button',
  template: `
    <a (click)="handleClick()"
       class="block py-2 px-3 text-gray-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-navy lg:p-0 hover:text-black menu-links cursor-pointer">
      <i class="{{icon}}"></i>
      <span class="pl-2.5">{{ content }}</span>
    </a>
  `,
})
export class ButtonComponent {
  @Input() action: string = ''
  @Input() content: string = ''
  @Input() icon: string = ''
  @Input() value: any = {}

  constructor(private cartService: CartService, private router: Router) {
  }

  handleClick() {
    if (this.action.startsWith('/')) {
      this.router.navigate([this.action]).then(r => console.log(r))
    } else if (this.action.startsWith('mailto:')) {
      window.open(this.action)
    } else if (this.action == 'addToCart') {
      this.cartService.addToCart('iPlCcPOE5uYvBZKwnRLzCqQ2d0n2', {product: this.value}).then(r => console.log(r))
    }
  }
}
