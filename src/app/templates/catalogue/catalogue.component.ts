// src/app/templates/catalogue/catalogue.component.ts
import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
})
export class CatalogueComponent implements OnInit {
  displayData: any[] = [];
  @Output() categorySelected = new EventEmitter<number>();

  constructor(private firestore: AngularFirestore) {
  }

  ngOnInit(): void {
    this.loadDynamicContent();
  }

  loadDynamicContent(): void {
    this.firestore.collection<any>('catalogue').valueChanges().subscribe((data: any) => {
      this.displayData = data;
    });
  }

  onCategorySelected(categoryId: number) {
    this.categorySelected.emit(categoryId);
  }
}
