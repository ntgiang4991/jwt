import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private httpClient: HttpClient) { }

  // login(email: string, password: string) {
  //   return this.httpClient.post<{ access_token: string }>('https://conduit.productionready.io/api/users/login', { email, password }).pipe(tap(res => {
  //     localStorage.setItem('access_token', res.access_token);
  //   }))
  // }

  // register(username: string, email: string, password: string) {
  //   return this.httpClient.post<{ access_token: string }>('https://conduit.productionready.io/api/users', { username, email, password }, {headers: {
  //     'Content-Type':  'application/json',
  //     'Authorization': 'Bearer ' + this.authenticationService.token
  //   }}).pipe(tap(res => {
  //     this.login(email, password)
  //   }))
  // }

  // logout() {
  //   localStorage.removeItem('access_token');
  // }

  // public get loggedIn(): boolean{
  //   return localStorage.getItem('access_token') !==  null;
  // }
}
