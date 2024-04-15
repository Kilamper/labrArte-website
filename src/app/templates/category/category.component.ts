// src/app/templates/category/category.component.ts
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
}

interface Category {
  categoryId: number;
  categoryName: string;
  productsList: Product[];
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
})
export class CategoryComponent implements OnInit {
  category?: Category;
  displayData: any[] = [];
  @Input() categoryId: number = 0;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.loadDynamicContent();
  }

  loadDynamicContent(): void {
    this.http.get<Category[]>('../data/catalogue.json').subscribe(data => {
      this.category = data.find(category => category.categoryId === this.categoryId);
    });
    this.displayData = this.category?.productsList.slice(0, 6) || [];
  }
}
