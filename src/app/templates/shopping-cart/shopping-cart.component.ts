import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart/cart.service";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
})
export class ShoppingCartComponent implements OnInit {
  displayData: any[] = [];

  constructor(private cartService: CartService, private userService: UserService) {
  }

  ngOnInit(): void {
    const uid = this.userService.getUID();
    if (uid) {
      this.cartService.getCart(uid).subscribe((data: any) => {
        this.displayData = data;
      });
    }
  }
}
