import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`
    #navbar-dropdown {
      z-index: 9999;
    }
  `]
})
export class HeaderComponent implements OnInit {
  userUID: string | undefined;
  userImage: string | undefined;

  constructor(private userService: UserService) {
    this.userUID = this.userService.getUID();
    if (this.userUID) {
      this.userService.getUserData().subscribe((userData: any) => {
        this.userImage = userData.profilePicture;
      });
    }
  }

  ngOnInit(): void {
    const burgerMenu = document.getElementById('burger-menu');
    const navbarDropdown = document.getElementById('navbar-dropdown');

    burgerMenu?.addEventListener('click', function (event: Event): void {
      event.stopPropagation();
      navbarDropdown?.classList.toggle('hidden');
    });

    document.addEventListener('click', function (event: Event) {
      const isClickInside = navbarDropdown?.contains(event.target as Node);

      if (!isClickInside && !navbarDropdown?.classList.contains('hidden')) {
        navbarDropdown?.classList.add('hidden');
      }
    });
  }
}
