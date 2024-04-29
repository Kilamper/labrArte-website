import {Component, OnInit} from '@angular/core';
import {LoadService} from "../../services/load/load.service";

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
})
export class ShoppingCartComponent implements OnInit {
    displayData: any[] = [];

    constructor(private loadService: LoadService) {
    }

    ngOnInit(): void {
        this.loadService.loadContent('users/iPlCcPOE5uYvBZKwnRLzCqQ2d0n2/cart').subscribe((data: any) => {
            this.displayData = data;
        });
    }
}
