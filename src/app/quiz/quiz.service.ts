import {Injectable} from '@angular/core'
import {Http, Response } from '@angular/http'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { API } from '../app.api'
import { Quiz } from './newQuiz.model';

import {ErrorHandler} from '../app.error-handler'



@Injectable()
export class QuizService {

  constructor(private http: Http){}

  createQuiz(json: any) {
    return this.http.post(`${API}/quizzes`, json).map((response: Response) => response.json());
  }

  updateQuiz(json: any, id:number) {
    return this.http.put(`${API}/quizzes/${id}`, json).map((response: Response) => response.text());
  }

  deleteQuiz(json: any, id:number) {
  return this.http.delete(`${API}/quizzes/${id}`, json).map((response: Response) => response.text());
  }

  getQuiz(): Observable<Quiz[]>{
    return this.http.get(`${API}/quizzes`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)
  }

}
