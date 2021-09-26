import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Hero } from './../../models/hero.model';
@Component({
  selector: 'app-hero-information-form',
  templateUrl: './hero-information-form.component.html',
  styleUrls: ['./hero-information-form.component.scss']
})

export class HeroInformationFormComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  doSubmit(form: NgForm): void {
    if(form.valid) {
      console.log('newHero', form.value);
    }
  }

}
