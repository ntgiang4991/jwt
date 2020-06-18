import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginUserData = {
    email: '',
    password: '',
  };

  constructor(
    private _auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  loginUser(){
    this._auth.login(this.loginUserData.email, this.loginUserData.password).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/']);
      },
      err => console.log(err)
    );
  }
}
