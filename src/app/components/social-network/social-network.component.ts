import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-social-network',
  template: '<a class="inline-block w-10 h-10 rounded-3xl text-center leading-10 bg-gray-600 hover:{{color}}}"\n' +
    '   href="{{url}}" target="_blank"><i\n' +
    '  class="fa-brands {{icon}} text-white"></i></a>',
})
export class SocialNetworkComponent {
  @Input() name: string = 'Blank';
  @Input() url: string = '#';
  @Input() icon: string = '';
  @Input() color: string = 'black';
}
