import { Routes } from '@angular/router';
import path from 'path';
import { Home } from './home/home';
import { Layout } from './layout/layout';

export const routes: Routes = [{path: '', component:Home},
  {path: 'layout', component: Layout}
];
