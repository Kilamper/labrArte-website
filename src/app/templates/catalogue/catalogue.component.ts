// src/app/templates/catalogue/catalogue.component.ts
import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {LoadService} from '../../services/load/load.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
})
export class CatalogueComponent implements OnInit {
  displayData: any[] = [];
  @Output() categorySelected = new EventEmitter<number>();

  constructor(private firestore: AngularFirestore, private loadService: LoadService) {
  }

  ngOnInit(): void {
    this.displayData = this.loadDynamicContent();
  }

  loadDynamicContent(): any {
    this.firestore.collection<any>('catalogue').valueChanges().subscribe((data: any) => {
      this.displayData = data;
    });
  }
}
