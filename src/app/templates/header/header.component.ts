import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  constructor() {}

  ngOnInit(): void {
      document.getElementById('burger-menu')?.addEventListener('click', function(): void {
        const navbarDropdown = document.getElementById('navbar-dropdown');
        navbarDropdown?.classList.toggle('hidden');
      });
  }

}
