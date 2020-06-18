import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { User } from './user.model';
import { tap, retry, map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { JwtService } from './jwt.service';
import { BehaviorSubject, Observable } from 'rxjs';
// import decode from 'jwt-decode';
// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json',
//     'Authorization': 'Token'
//   })
// };

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private _registerUrl = 'https://conduit.productionready.io/api/users';

  constructor(
    private http: HttpClient,
    private jwt: JwtService
  ) { }

  login(email: string, password: string) {
    return this.http.post('https://conduit.productionready.io/api/users/login', { email, password });
  }

  register(username: string, email: string, password: string) {
    return this.http.post<{ token: string }>('https://conduit.productionready.io/api/users', { username, email, password }).pipe(tap(res => {
      this.login(email, password)
    }))
  }

  logout() {
    localStorage.removeItem('token');
  }

  public get loggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  // public getToken(): string {
  //   console.log(localStorage.getItem('token'));
  //   return localStorage.getItem('token');
  // }
  // public isAuthenticated(): boolean {
  //   // get the token
  //   const token = this.getToken();
  //   // return a boolean reflecting 
  //   // whether or not the token is expired | tokenNotExpired(null, token);
  //   console.log('err');
  //   return false;
  // }

  // cachedRequests: Array<HttpRequest<any>> = [];
  // public collectFailedRequest(request): void {
  //   this.cachedRequests.push(request);
  // }
  // public retryFailedRequests(): void {
  //   // retry the requests. this method can
  //   retry(3)
  //   // be called after the token is refreshed
  // }


  // registerUser(user){
  //   return this.http.post<User>(this._registerUrl, user, httpOptions)
  // }
  // npm install --save cors

  // login(email: string, password: string) {
  //   return this.http.post<{ access_token: string }>('https://conduit.productionready.io/api/users/login', { email, password }).pipe(tap(res => {
  //     console.log(res.access_token);
  //     localStorage.setItem('access_token', res.access_token);
  //   }))
  // }

  // register(username: string, email: string, password: string) {
  //   return this.http.post<{ access_token: string }>('https://conduit.productionready.io/api/users', { username, email, password }).pipe(tap(res => {
  //     this.login(email, password)
  //   }))
  // }

  // logout() {
  //   localStorage.removeItem('access_token');
  // }

  // public get loggedIn(): boolean {
  //   return localStorage.getItem('access_token') !== null;
  // }

  //-----------------------

  // private currentUserSubject: BehaviorSubject<User>;
  //   public currentUser: Observable<User>;

  //   constructor(private http: HttpClient) {
  //       this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
  //       this.currentUser = this.currentUserSubject.asObservable();
  //   }

  //   public get currentUserValue(): User {
  //       return this.currentUserSubject.value;
  //   }

  //   login(username, password) {
  //       return this.http.post<any>(`https://conduit.productionready.io/api/users/login`, { username, password })
  //           .pipe(map(user => {
  //               // store user details and jwt token in local storage to keep user logged in between page refreshes
  //               localStorage.setItem('currentUser', JSON.stringify(user));
  //               this.currentUserSubject.next(user);
  //               return user;
  //           }));
  //   }

  //   logout() {
  //       // remove user from local storage and set current user to null
  //       localStorage.removeItem('currentUser');
  //       this.currentUserSubject.next(null);
  //   }

  //   register(username: string, email: string, password: string) {
  //     return this.http.post(`https://conduit.productionready.io/api/users`, {username, email, password});
  // }
}
