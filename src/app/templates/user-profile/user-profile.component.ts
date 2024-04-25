import {Component, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent {
  user = {
    name: 'User Name',
    email: 'user@example.com',
    photo: 'https://via.placeholder.com/150',
    phone: null,
    address: null
  };

  editMode = false;
  tempUser = {...this.user};

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  editProfile() {
    this.editMode = true;
    this.tempUser = {...this.user};
  }

  saveProfile() {
    this.user = {...this.tempUser};
    this.editMode = false;
  }

  cancelEdit() {
    this.editMode = false;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.tempUser.photo = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  openFileInput() {
    this.document.getElementById('file')?.click();
  }

  logout() {
    // Logic to logout the user
  }
}
