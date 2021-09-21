import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Hero } from '../shared/models/hero.model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

 hero: Hero | null = null;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const heroId = this.route.snapshot.paramMap.get('id')!;
    this.getHero(heroId);
  }

  private getHero(id: string): void {
    this.http.get<Hero>(`api/heroes/${id}`).subscribe((selectedHero) => {
      this.hero = selectedHero;
    })
  }

}
