import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { API } from '../app.api';
import { Appointment } from "./appointment.model";

import {ErrorHandler} from '../app.error-handler';

@Injectable()
export class AppointmentService{

  constructor(private http: Http){}

  getAppointment(): Observable<Appointment[]>{
    return this.http.get(`${API}/appointment`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)
  }

  createAppointment(json: any){
    return this.http.post(`${API}/appointment`, json).map((response: Response) => response.json());
  }

  delete(json: any,id:number){
    return this.http.delete(`${API}/appointment/${id}`).map((response: Response) => response.text());
  }

  save(json: any,id:number){
    return this.http.put(`${API}/appointment/${id}`, json).map((response: Response) => response.text());
  }
}
