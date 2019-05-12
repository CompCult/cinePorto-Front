import {Injectable} from '@angular/core'
import { Http, Response } from '@angular/http'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { API } from '../app.api'
import { MissionProposed } from './mission-proposed.model';

import {ErrorHandler} from '../app.error-handler'

@Injectable()
export class MissionProposedService {

  constructor(private http: Http){}

  getMission(): Observable<MissionProposed[]>{
    return this.http.get(`${API}/missions`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)
  }

  getPostsMission(id:number) {
    return this.http.get(`${API}/missions_answers/${id}`).map((response: Response) => response.json());
  }

  //https://cine-porto-api.herokuapp.com/missions_answers/query/fields?_mission=2

}
