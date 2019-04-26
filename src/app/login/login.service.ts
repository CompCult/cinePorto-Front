import {EventEmitter, Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { API } from '../app.api'

import { Router } from '@angular/router';

import {ErrorHandler} from '../app.error-handler'
import { User } from '../users/user.model';


export class FinalUser {
  email: string;
  password: string;
  constructor() {};
}



@Injectable()
export class LoginService {

  logged = false;
  showMenu = false;
  userType: string;
  userId:number;
  errorLoginMessage:string = "";

  showMenuEmitter = new EventEmitter<boolean>();
  showUserEmitter = new EventEmitter<string>();
  showErrorEmitter = new EventEmitter<string>();
  showUserIdEmitter = new EventEmitter<number>();

  constructor(private http: Http, private router: Router){}

  // restaurants(search?: string): Observable<Restaurant[]> {
  //   return this.http.get(`${MEAT_API}/restaurants`, {params: {q: search}})
  //     .map(response => response.json())
  //     .catch(ErrorHandler.handleError)
  // }

  login(json: any){
    return this.http.post(`${API}/users/auth`, json).map((response: Response) => response.json())
    .catch(error=> Observable.apply(this.showErrorEmitter.emit(error._body)));
    // Observable.call(this.showErrorEmitter.emit("teste de erro"))
  }

  createSession(credential:User){
    if((credential.type === "gestor") ||(credential.type === "professor")){
      localStorage.setItem('user', JSON.stringify(credential));
      this.userType = <string> credential.type;
      this.userId = <number> credential._id;
      this.logged =true;
      this.showMenu= true;
      this.showMenuEmitter.emit(true);
      this.showUserEmitter.emit(this.userType);
      this.showErrorEmitter.emit("");
      this.showUserIdEmitter.emit(this.userId);
      this.router.navigate(['/initial_page']);
    }else{
      this.showMenuEmitter.emit(false);
      this.showErrorEmitter.emit("Usuário não tem permissão de acesso ao painel.");
      this.showUserEmitter.emit("common");
      this.router.navigate(['/login']);
    }

  }

  sessionLogin(){
    if(!(localStorage.getItem('user') === null)){
      let user:User = JSON.parse(localStorage.getItem('user'));
      this.userType = <string> user.type;
      this.userId = <number> user._id;
      this.logged =true;
      this.showMenu= true;
      this.showMenuEmitter.emit(true);
      this.showUserEmitter.emit(this.userType);
      this.showErrorEmitter.emit("");
      this.showUserIdEmitter.emit(this.userId);
      this.router.navigate(['/initial_page']);
    }else{
      this.showMenuEmitter.emit(false);
      this.showErrorEmitter.emit("Usuário não tem permissão de acesso ao painel.");
      this.showUserEmitter.emit("common");
      this.router.navigate(['/login']);
    }
  }

  loggout(){
    if (!(localStorage.getItem('user') === null)) {
      localStorage.removeItem('user');
    }
    this.showMenu = false;
    this.logged = false;
    this.showMenuEmitter.emit(false);
    this.showUserEmitter.emit("common");
    this.router.navigate(['/login']);
  }

  loginPage(){
    this.router.navigate(['/login']);
  }

  isLogged(){
    return this.logged
  }

  getUserStatus():any{
    console.log(this.userType);
    return this.userType;
  }

  getUserId():number{
    return this.userId;
  }

  getErrorLoginMessage():string{
    return this.errorLoginMessage;
  }

  setErrorLoginMessage(error:string){
    this.errorLoginMessage = error;
  }

}
