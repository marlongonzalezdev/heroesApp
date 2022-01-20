import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroes.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`);
  }

  getHeroeById(id: string): Observable<Heroe> {
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`);
  }

  getHeroesFiltered(criteria: string): Observable<Heroe[]> {
    const params = new HttpParams().set('q', criteria).set('_limit', 6);

    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`, { params });
  }

  addHero(hero: Heroe): Observable<Heroe> {
    return this.http.post<Heroe>(`${this.baseUrl}/heroes`, hero);
  }

  updateHero(hero: Heroe): Observable<Heroe> {
    return this.http.put<Heroe>(`${this.baseUrl}/heroes/${hero.id}`, hero);
  }

  deleteHero(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/heroes/${id}`);
  }
}
