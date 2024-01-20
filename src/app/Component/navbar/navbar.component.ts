// navbar.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false; // You need to manage the login status

  ngOnInit() {
    // Initialize or check login status
  }

  logout() {
    // Implement logout logic
  }
}
