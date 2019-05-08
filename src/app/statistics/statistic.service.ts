import {Injectable} from '@angular/core'
import {Http, Response } from '@angular/http'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { API } from '../app.api'
import {ErrorHandler} from '../app.error-handler'

@Injectable()
export class StatisticService {

  constructor(private http: Http){}

  getStatisticQuizz(id:number) {
    return this.http.get(`${API}/analytics/quiz/${id}`).map((response: Response) => response.json());
  }

}
