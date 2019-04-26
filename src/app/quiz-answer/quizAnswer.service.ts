import {Injectable} from '@angular/core'
import {Http, Response } from '@angular/http'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { API } from '../app.api'
import { QuizAnswer } from './quizAnswer.model';


import { User } from '.././users/user.model';

import {ErrorHandler} from '../app.error-handler'



@Injectable()
export class QuizAnswerService {

  constructor(private http: Http){}

  createQuiz_answers(json: any) {
    return this.http.post(`${API}/quiz_answers`, json).map((response: Response) => response.json());
  }

  updateQuiz_answers(json: any, id:number) {
    return this.http.put(`${API}/quiz_answers/${id}`, json).map((response: Response) => response.text());
  }

  deleteQuiz_answers(json: any, id:number) {
  return this.http.delete(`${API}/quiz_answers/${id}`, json).map((response: Response) => response.text());
  }

  getQuiz_answers(): Observable<QuizAnswer[]>{
    return this.http.get(`${API}/quiz_answers`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)
  }

}
