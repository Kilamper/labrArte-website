// src/app/templates/category/category.component.ts
import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
})
export class CategoryComponent implements OnInit {
  displayData: any[] = [];
  title: string = 'Category';
  @Input() categoryId: number = 0;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.loadDynamicContent();
  }

  loadDynamicContent(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get<any[]>('/assets/data/catalogue.json').subscribe(data => {
      const foundCategory = data.find(category => category.categoryId === Number(id));
      if (foundCategory) {
        this.title = foundCategory.categoryName;
        this.displayData = foundCategory.productsList;
      } else {
        this.router.navigate(['/not-found']).then(r => r);
      }
    });
  }
}
