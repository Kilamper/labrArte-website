import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-social-network',
  template: `
    <a
      class="rounded-3xl text-center bg-gray-600 p-2 hover:bg-{{this.color}}"
      href="{{url}}" target="_blank">
      <i class="fa-brands {{icon}} text-white"></i>
    </a>
  `,
})
export class SocialNetworkComponent {
  @Input() name: string = 'Blank';
  @Input() url: string = '#';
  @Input() icon: string = 'fa-angular';
  @Input() color: string = 'black';
}
