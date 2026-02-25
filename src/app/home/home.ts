import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class HomeComponent {
  isLoggedIn: boolean;

  constructor(private router: Router) {
    const account = localStorage.getItem('account');
    this.isLoggedIn = !!account;
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }

  logout() {
    localStorage.removeItem('account');
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }
}
