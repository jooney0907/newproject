import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class Login {
  private router = inject(Router);
  private fb = inject(FormBuilder);
  error: string | null = null;

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  login() {
    this.error = null;
    if (this.loginForm.valid) {
      const storedAccount = localStorage.getItem('account');
      if (storedAccount) {
        const account = JSON.parse(storedAccount);
        const { email, password } = this.loginForm.value;
        if (account.email === email && account.password === password) {
          this.router.navigate(['/chat']);
          return;
        }
      }
      this.error = 'Invalid email or password. Please try again.';
    } else {
      this.error = 'Please fill in all fields.';
    }
  }
}
