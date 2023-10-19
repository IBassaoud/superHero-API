import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../../models/superhero.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SuperheroesService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.apiUrl}/SuperHero`);
  }

  getHero(id: number): Observable<Hero> {
    return this.http.get<Hero>(`${this.apiUrl}/SuperHero/${id}`);
  }

  createHero(hero: any): Observable<Hero> {
    return this.http.post<Hero>(`${this.apiUrl}/SuperHero`, hero);
  }

  updateHero(id: number, hero: any): Observable<Hero> {
    return this.http.put<Hero>(`${this.apiUrl}/SuperHero/${id}`, hero);
  }

  deleteHero(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/SuperHero/${id}`);
  }
}
