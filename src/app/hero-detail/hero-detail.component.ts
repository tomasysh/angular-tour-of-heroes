import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { HeroService } from './../shared/services/hero.service';
import { Hero } from '../shared/models/hero.model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero$: Observable<Hero>;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService
  ) {
    this.hero$ = this.getHero();
  }

  ngOnInit(): void {}

  private getHero(): Observable<Hero> {
    return this.route.paramMap.pipe(
      map((params) => params.get('id')),
      switchMap((heroId) => this.heroService.getHero(heroId!))
    );
  }

}
