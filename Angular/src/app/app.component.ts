import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular';
  constructor(private userService: UserService) { }
  ngOnInit() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.userService.setUser(user);
  }
}
