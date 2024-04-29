import {Component, Input} from '@angular/core';
import {ScrollService} from '../../services/scroll/scroll.service';

interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    description: string;
}

@Component({
    selector: 'app-product-item',
    template: `
        <a (click)="scrollService.scrollToTop()" [routerLink]="['/product', product.id]" class="text-center">
            <img class="rounded-xl w-80 border-b border-gray-400" [src]="product.image" [alt]="product.name">
            <p class="text-xl font-semibold">{{ product.name }}</p>
            <p class="text-xl font-semibold">{{ product.price }} €</p>
            <div class="flex justify-between px-4 py-2 border-t border-gray-400">
                <app-button [content]="'Añadir al carrito'" [icon]="'fa-solid fa-cart-plus'"
                            [product]="product"></app-button>
                <app-button [action]="'/product/' + product.id" [content]="'Detalles'"
                            [icon]="'fa-regular fa-file-lines'"></app-button>
            </div>
        </a>`
})
export class ProductItemComponent {
    @Input() product: Product = {
        id: 0,
        name: 'Product',
        image: 'https://th.bing.com/th/id/R.7493e5654057ed64161c7579703d56b4?rik=zhz13r4b96lqZA&pid=ImgRaw&r=0',
        price: 0,
        description: 'Description'
    }

    constructor(public scrollService: ScrollService) {
    }
}
