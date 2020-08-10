import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/interfaces/credentials';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(public userService: UserService, private router: Router) { }

  login(loginForm: NgForm): void {
    if (loginForm.valid) {
      const credentials: Credentials = loginForm.value;
      this.userService.login(credentials)
        .subscribe(res => {
          localStorage.setItem('authToken', res.token);
          localStorage.setItem('user', JSON.stringify(res.user))
          this.userService.setUser(res.user);

          this.userService.isProfOut = true;
          console.log(this.userService.isProfOut)

          setTimeout(() => {
            this.router.navigate(['/']);
          }, 1500)
        }, error => {
          console.log(error);
        })
    }
  }

}
