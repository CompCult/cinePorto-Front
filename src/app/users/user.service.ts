import {Injectable} from '@angular/core'
import {Http, Response } from '@angular/http'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { API } from '../app.api'
import { User } from './user.model';
import { NewUser } from './newUser.model';

import {ErrorHandler} from '../app.error-handler'



@Injectable()
export class UserService {

  constructor(private http: Http){}

  createUser(json: any) {
    return this.http.post(`${API}/users/register`, json).map((response: Response) => response.json());
  }

  getUser(id: number) {
    return this.http.get(`${API}/users/${id}`).map((response: Response) => response.json());
  }

  updateUser(json: any, id:number) {
    return this.http.post(`${API}/users/update/${id}`, json).map((response: Response) => response.text());
  }

  deleteUser(json: any, id:number) {
  return this.http.delete(`${API}/users/${id}`, json).map((response: Response) => response.text());
  }


  search(field: string, param: string): Observable<User[]>{
    return this.http.get(`${API}/users/query/fields?${field}=${param}`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)
  }

  getUsuarios(): Observable<User[]>{
    return this.http.get(`${API}/users`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)
  }

}
