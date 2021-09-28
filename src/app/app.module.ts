import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AddHeroPageComponent } from './pages/add-hero-page/add-hero-page.component';
import { EditHeroPageComponent } from './pages/edit-hero-page/edit-hero-page.component';
import { HeroInformationFormComponent } from './shared/components/hero-information-form/hero-information-form.component';
import { AngularMaterialModule } from './shared/angular-material/angular-material.module';


@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroDetailComponent,
    HeroInformationFormComponent,
    AddHeroPageComponent,
    EditHeroPageComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
