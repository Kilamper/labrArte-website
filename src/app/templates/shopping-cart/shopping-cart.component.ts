import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart/cart.service";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
})
export class ShoppingCartComponent implements OnInit {
  displayData: any[] = [];
  numberOfProducts: number = 0;
  totalPrice: number = 0;
  documentId: string = '';

  constructor(private cartService: CartService, private userService: UserService) {
  }

  ngOnInit(): void {
    const uid = this.userService.getUID();
    if (uid) {
      this.cartService.getCart(uid).subscribe((data: any) => {
        this.displayData = data;
        this.totalPrice = 0;
        this.numberOfProducts = 0;
        for (const item of this.displayData) {
          this.numberOfProducts++;
          this.totalPrice += item.product.price;
          this.documentId = item.documentId;
        }
      });
    }
  }

  removeProductFromCart(documentId: string) {
    const uid = this.userService.getUID();
    if (uid) {
      const productToRemove = this.displayData.find(item => item.documentId === documentId);
      this.cartService.removeFromCart(uid, documentId).then(() => {
        this.displayData = this.displayData.filter(item => item.documentId !== documentId);
      });
    }
  }
}
