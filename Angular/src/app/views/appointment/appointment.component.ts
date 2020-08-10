import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import { Appointment } from 'src/app/models/appointment.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  appointmentTypes = [];

  constructor(public appointmentService: AppointmentService) { }

  ngOnInit() {
    this.appointmentService.getAppointmentTypes()
      .subscribe(res => this.appointmentTypes = res)
  }

  createAppointment(appointmentForm: NgForm): void {

    if (appointmentForm.valid) {
      const appointment: Appointment = appointmentForm.value;
      this.appointmentService.createAppointment(appointment)
        .subscribe(res => {
          console.log(res)
        }, function (error) {
          console.log(error)
        })
    }
    //Obtenemos el token del usuario en localStorage


  }
}
