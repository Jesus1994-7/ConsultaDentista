import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Appointment } from '../models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  appointmentChoosen: object[];

  API_URL = environment.API_URL;

  constructor(private httpClient: HttpClient) { }

  createAppointment(appointment: Appointment) : Observable<Appointment> {
    return this.httpClient.post<Appointment>(this.API_URL + '/api/appointment/create', appointment, {
      headers: {
        authorization: 'Bearer '+ localStorage.getItem('authToken')
      }
    })
  }

  getAppointmentTypes(): Observable<any> {
    return this.httpClient.get<any>(this.API_URL + '/api/appointment-types');
  }
  getAppointmentUser(): Observable<any> {
    return this.httpClient.get<any>(this.API_URL + '/api/appointment/my-appointment', {
      headers: {
        authorization: 'Bearer '+ localStorage.getItem('authToken')
      }
    })
  }
}
