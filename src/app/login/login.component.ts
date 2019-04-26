import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { LoginService, FinalUser } from './login.service';
import { ErrorHandler } from '../app.error-handler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: FinalUser = new FinalUser();
  error: string = "";
  session:boolean = true;

  constructor(private loginService: LoginService,private cdref: ChangeDetectorRef) { }

  login(){
    this.loginService.login(this.user).subscribe(
      credential => this.loginService.createSession(credential),
      error => console.log(this.error)
    );

    this.loginService.showErrorEmitter.subscribe(error => {
      this.error = error.replace('"','');
    })
  }

  ngOnInit() {
    if(this.session){
      this.loginService.sessionLogin();
      this.session = false;
    }
  }
}
