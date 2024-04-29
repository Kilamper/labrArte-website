import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LoadService} from "../../services/load/load.service";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  product: Product = {
    id: 0,
    name: 'Product',
    image: 'https://th.bing.com/th/id/R.7493e5654057ed64161c7579703d56b4?rik=zhz13r4b96lqZA&pid=ImgRaw&r=0',
    price: 0,
    description: 'Description'
  };
  categoryId: number = 0;

  constructor(private loadService: LoadService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.categoryId = Math.floor(id / 1000);
    this.loadService.loadContent('/catalogue').subscribe((data: any) => {
      const foundCategory = data.find((category: any) => category.categoryId === this.categoryId);
      if (foundCategory) {
        const foundProduct = foundCategory.productsList.find((product: any) => product.id === id);
        if (foundProduct) {
          this.product = foundProduct;
        } else {
          this.router.navigate(['/not-found']).then(r => r);
        }
      } else {
        this.router.navigate(['/not-found']).then(r => r);
      }
    });
  }
}
