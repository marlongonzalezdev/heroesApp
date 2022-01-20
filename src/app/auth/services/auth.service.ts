import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { 

  }

  private _auth: User | undefined;
  private baseUrl: string = environment.baseUrl

  get auth(): User
  {
    return {...this._auth!};
  }

  login(): Observable<User>
  {
      return this.http.get<User>(`${this.baseUrl}/usuarios/1`)
      .pipe(
        tap(resp=> this._auth = resp),
        tap(resp=> localStorage.setItem('id', resp.id.toString())),
      );
  }

  logout()
  {
    this._auth = undefined;
    localStorage.removeItem('id');
  }

  verifyAuth():Observable<boolean> {
     if(!localStorage.getItem('id')) 
     {
        return of(false);       
     }
     
     return this.http.get<User>(`${this.baseUrl}/usuarios/${localStorage.getItem('id')}`)
     .pipe(map( auth => {
       this._auth = auth;
       return true;
     }));
     //return of(true)
  }
}
