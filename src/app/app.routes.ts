import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent} from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';

export const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'nav-bar', component: NavBarComponent},
];



