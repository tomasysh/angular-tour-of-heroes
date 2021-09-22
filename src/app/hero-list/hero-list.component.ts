import { HeroService } from './../shared/services/hero.service';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Hero } from './../shared/models/hero.model';
@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroList$: Observable<Hero[]>;

  constructor(
    private heroService: HeroService
  ) {
    this.heroList$ = this.heroService.getHeroes();
  }

  ngOnInit(): void {}

}
