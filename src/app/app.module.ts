import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EventComponent } from './event/event.component';
import { SpecialComponent } from './special/special.component';
import { AuthService } from './auth.service';
import { TokenInterceptor } from './token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EventComponent,
    SpecialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // JwtModule.forRoot({
    //   config: {
    //     tokenGetter: function  tokenGetter() {
    //          return   localStorage.getItem('access_token');},
    //     whitelistedDomains: ['https://conduit.productionready.io/api', "localhost:4200"],
    //     blacklistedRoutes: ['http://localhost:3000/auth/login'],
    //   }
    // })
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
// npm install @auth0/angular-jwt --save
// npm i --save angular2-jwt
// angular.json
// "browserTarget": "authentication:build",
// "proxyConfig": "src/proxy.conf.json",