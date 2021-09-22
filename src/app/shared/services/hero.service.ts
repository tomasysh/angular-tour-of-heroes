import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Hero } from './../models/hero.model';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private http: HttpClient
  ) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`api/heroes`);
  }

}
