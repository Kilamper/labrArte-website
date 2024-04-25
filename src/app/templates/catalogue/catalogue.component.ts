// src/app/templates/catalogue/catalogue.component.ts
import {Component, OnInit} from '@angular/core';
import {LoadService} from '../../services/load/load.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
})
export class CatalogueComponent implements OnInit {
  displayData: any[] = [];

  constructor(private loadService: LoadService) {
  }

  ngOnInit(): void {
    this.loadService.loadContent('catalogue').subscribe((data: any) => {
      this.displayData = data;
    });
  }
}
