import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Hero } from './../shared/models/hero.model';
@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroList: Hero[] = [];

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.http.get<Hero[]>('api/heroes').subscribe((heroList) => {
      this.heroList = heroList;
    });
  }

}
