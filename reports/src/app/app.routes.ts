import { Routes } from '@angular/router';
import { Report1Component } from './report1/report1.component';
import { Report2Component } from './report2/report2.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'report1', component: Report1Component },
    { path: 'report2', component: Report2Component },
];
