import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

export const routes: Routes = [
    { path: '', redirectTo:'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: '', component: LayoutComponent, children:
        [
            { path: 'dashboard', component: DashboardComponent } 
        ]
    },
    { path: 'sign-up', component: SignUpComponent }
];
