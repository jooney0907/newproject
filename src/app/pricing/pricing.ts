import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.html',
  styleUrls: ['./pricing.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class PricingComponent {
  private router = inject(Router);

  goHome() {
    this.router.navigate(['/']);
  }

  goToChat() {
    this.router.navigate(['/chat']);
  }
}
