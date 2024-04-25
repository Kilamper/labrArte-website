import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LoadService} from "../../services/load/load.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  categoryId: number = 0;
  productName: string = 'Product';
  productImage: string = 'https://th.bing.com/th/id/R.7493e5654057ed64161c7579703d56b4?rik=zhz13r4b96lqZA&pid=ImgRaw&r=0';
  productPrice: number = 0;
  productDescription: string = 'Lorem ipsum dolor sit amet consectetur. Viverra id tortor lorem\n' +
    '      aliquam eget id quis. Imperdiet non purus orci senectus. Tortor\n' +
    '      id suspendisse id pellentesque ac. Mattis dignissim aenean\n' +
    '      senectus volutpat donec duis tellus lorem.';

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
          this.productName = foundProduct.name;
          this.productImage = foundProduct.image;
          this.productPrice = foundProduct.price;
          this.productDescription = foundProduct.description;
        } else {
          this.router.navigate(['/not-found']).then(r => r);
        }
      } else {
        this.router.navigate(['/not-found']).then(r => r);
      }
    });
  }
}
