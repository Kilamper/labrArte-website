// src/app/templates/category/category.component.ts
import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LoadService} from '../../services/load/load.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
})
export class CategoryComponent implements OnInit {
  displayData: any[] = [];
  title: string = 'Category';
  @Input() categoryId: number = 0;

  constructor(private loadService: LoadService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.loadService.loadContent('/catalogue').subscribe((data: any) => {
      const foundCategory = data.find((category: any) => category.categoryId === Number(id));
      if (foundCategory) {
        this.title = foundCategory.categoryName;
        this.displayData = foundCategory.productsList;
      } else {
        this.router.navigate(['/not-found']).then(r => r);
      }
    });
  }
}
