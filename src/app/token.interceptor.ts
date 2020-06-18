import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs/internal/Observable';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  // constructor(public auth: AuthService) { }
  // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

  //     request = request.clone({
  //         setHeaders: {
  //             Authorization: `Token ${this.auth.getToken()}`
  //         }
  //     });
  //     return next.handle(request);
  // }

  // constructor(private authenticationService: AuthService) {}

  // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //     // add authorization header with jwt token if available
  //     let currentUser = this.authenticationService.currentUserValue;
  //     if (currentUser && currentUser.token) {
  //         request = request.clone({
  //             setHeaders: { 
  //                 Authorization: `Bearer ${currentUser.token}`
  //             }
  //         });
  //     }

  //     return next.handle(request);
  // }

  constructor(public auth: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(request);
    let token = localStorage.getItem('token');
    request = this.addToken(request, token)

    return next.handle(request);
  }

  private addToken(request: HttpRequest<any>, token: string){
    return request.clone({
      setHeaders: {
        'Authorization': `Token ${token}`,
        'Content-type': 'application/json; charset=utf-8'
      },
    })
  }
}