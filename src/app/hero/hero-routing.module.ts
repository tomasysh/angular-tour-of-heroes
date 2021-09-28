import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddHeroPageComponent } from './pages/add-hero-page/add-hero-page.component';
import { EditHeroPageComponent } from './pages/edit-hero-page/edit-hero-page.component';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';
import { HeroListComponent } from './pages/hero-list/hero-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HeroListComponent
      },
      {
        path: 'add',
        component: AddHeroPageComponent
      },
      {
        path: 'edit',
        component: EditHeroPageComponent
      },
      {
        path: ':id',
        component: HeroDetailComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroRoutingModule { }
