import {Injectable} from '@angular/core'
import { Http } from '@angular/http'

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

}
