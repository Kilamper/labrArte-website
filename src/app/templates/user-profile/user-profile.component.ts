import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {UserService} from "../../services/user/user.service";
import {Router} from "@angular/router";
import {User} from "../../interfaces/user.interface";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html'
})

export class UserProfileComponent implements OnInit {

  userData: User = {
    confirmPassword: "",
    password: "",
    profilePicture: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    birthDate: new Date
  };
  tempUser!: User;
  editMode = false;

  constructor(@Inject(DOCUMENT) private document: Document, private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.userService.getUserData().subscribe((userData: User) => {
      if (userData) {
        this.userData = userData;
        this.tempUser = {...userData};
      }
    });
  }

  editProfile() {
    this.editMode = true;
    this.tempUser = {...this.userData};
  }

  saveProfile() {
    if (this.tempUser) {
      const updatedUserData: Partial<User> = {};

      if (this.tempUser.profilePicture !== undefined) {
        updatedUserData.profilePicture = this.tempUser.profilePicture;
      }
      if (this.tempUser.birthDate !== undefined) {
        updatedUserData.birthDate = this.tempUser.birthDate;
      }
      if (this.tempUser.phone !== undefined) {
        updatedUserData.phone = this.tempUser.phone;
      }
      if (this.tempUser.address !== undefined) {
        updatedUserData.address = this.tempUser.address;
      }

      this.userService.updateUserData(this.userService.getUID(), updatedUserData)
        .then(() => {
          this.userData = {...this.userData, ...updatedUserData};
          this.editMode = false;
        })
        .catch((error) => {
          console.error('Error updating user data: ', error);
        });
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.userService.uploadProfilePicture(file)
        .then((downloadURL) => {
          this.tempUser.profilePicture = downloadURL;
          this.userService.updateUserData(this.userService.getUID(), {profilePicture: downloadURL})
            .then(() => {
              this.userData.profilePicture = downloadURL;
            })
            .catch((error) => {
              console.error('Error updating profile picture URL in Firebase:', error);
            });
        })
        .catch((error) => {
          console.error('Error uploading profile picture:', error);
        });
    }
  }

  openFileInput() {
    this.document.getElementById('file')?.click();
  }

  logout() {
    this.userService.logout().then(() => {
      this.router.navigate(['']).then(r => r)
    });
  }
}
