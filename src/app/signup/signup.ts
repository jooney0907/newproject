import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.html',
  styleUrls: ['./signup.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class SignupComponent {
  private router = inject(Router);
  private fb = inject(FormBuilder);

  goHome() {
    this.router.navigate(['/']);
  }

  signupForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  signup() {
    if (this.signupForm.valid) {
      const account = this.signupForm.value;
      localStorage.setItem('account', JSON.stringify(account));
      this.router.navigate(['/chat']);
    } else {
      console.log('Form is not valid');
    }
  }

  signInWithGoogle() {
    const googleEmail = prompt('Please enter your Google email:');
    if (googleEmail) {
      const account = {
        name: googleEmail.split('@')[0],
        email: googleEmail,
        password: 'google-signed-in'
      };
      localStorage.setItem('account', JSON.stringify(account));
      this.router.navigate(['/chat']);
    }
  }
}
