import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-web-page';
  isFormOrError = false;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  isLoginOrSignupOr404(): boolean {
    const route = this.activatedRoute.snapshot;
    const childRoute = route.firstChild;
    if (childRoute && childRoute.routeConfig) {
      const path = childRoute.routeConfig.path;
      this.isFormOrError = path === 'login' || path === 'signup' || path === '**';
    }
    return this.isFormOrError;
  }
}
