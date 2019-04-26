import {Injectable} from '@angular/core'
import {Http, Response } from '@angular/http'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { API } from '../app.api'
 import { MissionAnswer } from './missionAnswer.model';

import {ErrorHandler} from '../app.error-handler'



@Injectable()
export class MissionAnswerService {

  constructor(private http: Http){}

  createMissionAnswer(json: any) {
    return this.http.post(`${API}/missions_answers`, json).map((response: Response) => response.json());
  }

  updateMissionAnswer(json: any, id:number) {
    return this.http.put(`${API}/missions_answers/${id}`, json).map((response: Response) => response.text());
  }

  deleteMissionAnswer(json: any, id:number) {
  return this.http.delete(`${API}/missions_answers/${id}`, json).map((response: Response) => response.text());
  }

   getMissionAnswer(): Observable<MissionAnswer[]>{
     return this.http.get(`${API}/missions_answers`)
     .map(response => response.json())
     .catch(ErrorHandler.handleError)
   }

}
