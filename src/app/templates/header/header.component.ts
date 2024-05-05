import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
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
    document.getElementById('burger-menu')?.addEventListener('click', function (): void {
      const navbarDropdown = document.getElementById('navbar-dropdown');
      navbarDropdown?.classList.toggle('hidden');
    });
  }
}
