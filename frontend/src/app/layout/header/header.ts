import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  isLoggedIn: boolean = false;
  user: any = null;
  dropdownOpen: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe(value => {
      this.isLoggedIn = value;
    });

    this.authService.user$.subscribe(user => {
      this.user = user;
    });
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  logout() {
    this.authService.logout();
    this.dropdownOpen = false;

    if (this.router.url === '/' || this.router.url.startsWith('/#')) {
      window.location.reload();
    } else {
      this.router.navigate(['/']);
    }
  }
}
