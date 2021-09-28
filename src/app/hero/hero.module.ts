import { AngularMaterialModule } from './../shared/angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroRoutingModule } from './hero-routing.module';
import { FormsModule } from '@angular/forms';
import { HeroListComponent } from './pages/hero-list/hero-list.component';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';
import { HeroInformationFormComponent } from './components/hero-information-form/hero-information-form.component';
import { AddHeroPageComponent } from './pages/add-hero-page/add-hero-page.component';
import { EditHeroPageComponent } from './pages/edit-hero-page/edit-hero-page.component';


@NgModule({
  declarations: [
    HeroListComponent,
    HeroDetailComponent,
    HeroInformationFormComponent,
    AddHeroPageComponent,
    EditHeroPageComponent,
  ],
  imports: [
    CommonModule,
    HeroRoutingModule,
    FormsModule,
    AngularMaterialModule,
  ]
})
export class HeroModule { }
