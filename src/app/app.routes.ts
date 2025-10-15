import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Home } from './home/home';
import { About } from './about/about';
import { Contactos } from './contactos/contactos';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', component: Home },
      { path: 'about', component: About },
      // si luego creas contact, lo agregas aquí:
      { path: 'contactos', component: Contactos }
    ]
  },
  { path: '**', redirectTo: '' }
];