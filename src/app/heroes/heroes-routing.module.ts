import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHeroeComponent } from './pages/add-heroe/add-heroe.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { ListComponent } from './pages/list/list.component';
import { SearchComponent } from './pages/search/search.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'add',
        component: AddHeroeComponent,
      },
      {
        path: 'edit/:id',
        component: AddHeroeComponent,
      },
      {
        path: 'search',
        component: SearchComponent,
      },
      {
        path: ':id',
        component: HeroeComponent,
      },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
