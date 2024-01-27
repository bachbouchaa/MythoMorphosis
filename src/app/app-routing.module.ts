
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CurrentWeekComponent } from './components/current-week/current-week.component';


const routes: Routes = [
  { path: 'currentWeek', component: CurrentWeekComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: LoginComponent },
  { path: 'services', component: LoginComponent },
  { path: 'team', component: LoginComponent },
  { path: 'contact', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }