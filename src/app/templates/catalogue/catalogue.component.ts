import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
})
export class CatalogueComponent implements OnInit {
  catalogueData: any[] = [];
  displayData: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadDynamicContent();
  }

  loadDynamicContent(): void {
    this.http.get<any[]>('/assets/data/catalogue.json').subscribe(data => {
      this.catalogueData = data;
      this.displayData = this.catalogueData.slice(0, 6);
    });
  }
}
