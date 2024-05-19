import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes =
[
  {
    path: '',
    component: HomeComponent,
    title: 'Houses list'
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
    title: 'House detail'
  }
];

export default routes;
