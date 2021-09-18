import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private http: HttpClient
  ) { }

  getHeros() {
    this.http.get('api/posts').subscribe((heroList) => {
      console.log('heroList', heroList);
    });
  }
}
