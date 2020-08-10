import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  errorMsg: string;
  constructor(public userService: UserService) { }

  register(registerForm: NgForm): void {
    /*if(!registerForm.valid) {
      setTimeout(()=> this.errorMsg = '', 2500)
      this.errorMsg = 'Revisa tus campos'
      return
    }*/
    const user: User = registerForm.value;
    this.userService.register(user)
      .subscribe(res => {
        console.log(res);
      });
  }

}
