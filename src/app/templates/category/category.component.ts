// src/app/templates/category/category.component.ts
import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
})
export class CategoryComponent implements OnInit {
  displayData: any[] = [];
  title: string = 'Category';
  @Input() categoryId: number = 0;

  constructor(private firestore: AngularFirestore, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.loadDynamicContent();
  }

  loadDynamicContent(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.firestore.collection<any[]>('catalogue').valueChanges().subscribe((data: any) => {
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
