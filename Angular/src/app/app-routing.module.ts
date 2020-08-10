import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { AppointmentComponent } from './views/appointment/appointment.component';
import { ProfileComponent } from './views/profile/profile.component';


const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"signup", component: RegisterComponent},
  {path:"login", component: LoginComponent},
  {path:"appointment", component: AppointmentComponent},
  {path:"profile", component: ProfileComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
