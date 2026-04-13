import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PreciosComponent } from './precios/precios.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'precios', component: PreciosComponent },
  { path: '**', redirectTo: '' },
];
