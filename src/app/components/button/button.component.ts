import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {CartService} from '../../services/cart/cart.service';
import {UserService} from "../../services/user/user.service";
import {ToastrService} from 'ngx-toastr';

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

  constructor(private toastr: ToastrService, private cartService: CartService, private userService: UserService, private router: Router) {
  }

  handleClick() {
    if (this.action.startsWith('/')) {
      this.router.navigate([this.action]).then(r => console.log(r))
    } else if (this.action.startsWith('mailto:')) {
      window.open(this.action)
    } else if (this.action == 'addToCart' && this.isLoggedIn()) {
      const uid = this.userService.getUID()
      if (uid) {
        this.cartService.addToCart(uid, {product: this.value}).then(r => console.log(r))
        this.toastr.success('Producto añadido al carrito', 'Éxito')
      }
    } else {
      this.toastr.error('Por favor inicie sesión para agregar productos al carrito', 'Error');
    }
  }

  isLoggedIn(): boolean {
    const userToken = localStorage.getItem('userToken');
    return !!userToken;
  }
}
