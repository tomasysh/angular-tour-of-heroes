import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AddHeroPageComponent } from './pages/add-hero-page/add-hero-page.component';
import { EditHeroPageComponent } from './pages/edit-hero-page/edit-hero-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  {
    path: 'heroes',
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
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
