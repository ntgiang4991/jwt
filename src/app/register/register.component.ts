import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { AuthService } from '../auth.service';
import { JwtService } from '../jwt.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerUserData = {
    username: '',
    email: '',
    password: '',
  };

  constructor(
    private _auth: AuthService,
    private _jwt: JwtService
  ) { }

  ngOnInit(): void {
  }

  registerUser() {
    console.log(this.registerUserData.username, this.registerUserData.email, this.registerUserData.password);
    this._auth.register(this.registerUserData.username, this.registerUserData.email, this.registerUserData.password).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }
}
