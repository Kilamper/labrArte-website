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
    const url = this.route.snapshot.paramMap.get('url');
    this.loadService.loadContent('/catalogue').subscribe((data: any) => {
      const foundCategory = data.find((category: any) => category.url === url);
      if (foundCategory) {
        this.title = foundCategory.name;
        this.displayData = foundCategory.products;
      } else {
        this.router.navigate(['/not-found']).then(r => r);
      }
    });
  }
}
