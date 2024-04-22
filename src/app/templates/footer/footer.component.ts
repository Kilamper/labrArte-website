import {Component} from '@angular/core';
import {ScrollService} from '../../services/scroll/scroll.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  constructor(public scrollService: ScrollService) {
  }
}
