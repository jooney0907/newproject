import { Routes } from '@angular/router';
import { Login } from './login/login';
import { SignupComponent } from './signup/signup';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'signup', component: SignupComponent },
    {
        path: 'chat',
        loadComponent: () => import('./chat/chat').then(m => m.ChatComponent)
    }
];
