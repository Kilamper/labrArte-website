import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html'
})
export class CategoryComponent {
  @Input() categoryId: number = 0;
  @Input() categoryName: string = 'Category';
  @Input() categoryImage: string = 'https://th.bing.com/th/id/R.7493e5654057ed64161c7579703d56b4?rik=zhz13r4b96lqZA&pid=ImgRaw&r=0';
}
