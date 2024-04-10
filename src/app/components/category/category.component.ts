import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-category',
  template: '<a href="../pages/category.html?id={{categoryId}}" class="text-center">\n' +
    '  <img class="rounded-xl w-80 border border-gray-400" [src]="categoryImage" alt="categoryName">\n' +
    '  <p class="text-xl font-semibold">{{ categoryName }}</p>\n' +
    '</a>'
})
export class CategoryComponent {
  @Input() categoryId: number = 0;
  @Input() categoryName: string = 'Category';
  @Input() categoryImage: string = 'https://th.bing.com/th/id/R.7493e5654057ed64161c7579703d56b4?rik=zhz13r4b96lqZA&pid=ImgRaw&r=0';
}
