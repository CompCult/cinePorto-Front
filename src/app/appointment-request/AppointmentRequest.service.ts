import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { API } from '../app.api';

import {ErrorHandler} from '../app.error-handler';
import { AppointmentRequest } from "./appointmentRequest.model";

@Injectable()
export class AppointmentRequestService{

  constructor(private http: Http){}

  update(json: any, id:number) {
    return this.http.put(`${API}/appointment_requests/${id}`, json).map((response: Response) => response.text());
  }

  delete(json: any, id:number) {
    return this.http.delete(`${API}/appointment_requests/${id}`, json).map((response: Response) => response.text());
  }

  getAppointmentRequest(): Observable<AppointmentRequest[]>{
    return this.http.get(`${API}/appointment_requests`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)
  }

}
