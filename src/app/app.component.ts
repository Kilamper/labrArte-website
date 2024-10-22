import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-web-page';
  isFormOrError = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
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
