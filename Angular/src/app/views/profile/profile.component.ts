import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  name;
  email;
  surname;
  orderId;
  isDoneOrder: boolean = false;
  appointmentChoose: object = [];
  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {


    var dataLogin:User = JSON.parse(localStorage.getItem('user'));

    this.name = dataLogin['name'];
    this.email = dataLogin['email'];
    this.surname = dataLogin['surname'];

    this.appointmentService.getAppointmentUser()
      .subscribe(
        res => this.appointmentChoose = res,
        error => console.log(error),
        () => console.log(this.appointmentChoose)
      )
  }

}
