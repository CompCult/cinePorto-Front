import {Injectable} from '@angular/core'
import {Http, Response } from '@angular/http'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { API } from '../app.api'
import { Mission } from './mission.model';

import {ErrorHandler} from '../app.error-handler'



@Injectable()
export class MissionService {

  constructor(private http: Http){}

  createMissions(json: any) {
    return this.http.post(`${API}/missions`, json).map((response: Response) => response.json());
  }

  updateMissions(json: any, id:number) {
    return this.http.put(`${API}/missions/${id}`, json).map((response: Response) => response.text());
  }

  deleteMissions(json: any, id:number) {
  return this.http.delete(`${API}/missions/${id}`, json).map((response: Response) => response.text());
  }

  getMission(): Observable<Mission[]>{
    return this.http.get(`${API}/missions`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)
  }

}
