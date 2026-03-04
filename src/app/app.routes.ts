import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { Login } from './login/login';
import { SignupComponent } from './signup/signup';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: Login },
    { path: 'signup', component: SignupComponent },
    {
        path: 'pricing',
        loadComponent: () => import('./pricing/pricing').then(m => m.PricingComponent)
    },
    {
        path: 'settings',
        loadComponent: () => import('./settings/settings').then(m => m.SettingsComponent)
    },
    {
        path: 'chat',
        loadComponent: () => import('./chat/chat').then(m => m.ChatComponent)
    }
];
