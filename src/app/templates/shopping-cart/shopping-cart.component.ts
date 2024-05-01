import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart/cart.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
})
export class ShoppingCartComponent implements OnInit {
  displayData: any[] = [];

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartService.getCart('iPlCcPOE5uYvBZKwnRLzCqQ2d0n2').subscribe((data: any) => {
      this.displayData = data;
    });
  }
}
