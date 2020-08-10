import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../interfaces/login';
import { Credentials } from '../interfaces/credentials';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL: string = environment.API_URL;
  private user: User;

  isProfOut: boolean = false;

  constructor(private httpClient: HttpClient) { }

  //Registro
  register(user:User): Observable<User> {
    console.log(user);
    return this.httpClient.post<User>(this.API_URL + '/api/auth/signup', user);
  }

  login(credentials: Credentials): Observable<Login> {
    console.log(credentials);
    return this.httpClient.post<Login>(this.API_URL + '/api/auth/login', credentials);
  }
  
  logout(): void {
    this.httpClient.get(this.API_URL + '/api/auth/logout', {
      headers: {
        authorization: 'Bearer '+ localStorage.getItem('authToken')
      }
    })
    .subscribe(console.log);
    this.setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
  }

  setUser(user:User):void {
    this.user = user;
  }

  getUser(): User {
    return this.user
  }
}
