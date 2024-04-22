import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <a [routerLink]="[url]"
       class="block py-2 px-3 text-gray-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-navy lg:p-0 hover:text-black menu-links">
      <i class="{{icon}}"></i>
      <span class="pl-2.5">{{ content }}</span>
    </a>
  `,
})
export class ButtonComponent {
  @Input() url: string = '/'
  @Input() content: string = ''
  @Input() icon: string = ''
}
