import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SignupComponent } from './components/signup/signup.component';
import { CommonModule } from '@angular/common'; 
import { WorkoutComponent } from './components/workout/workout.component';
import { SessionComponent } from './components/session/session.component';
import { CurrentWeekComponent } from './components/current-week/current-week.component';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent, LoginComponent, NavbarComponent, SidebarComponent, SignupComponent, WorkoutComponent, SessionComponent, CurrentWeekComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterOutlet, RouterLink, RouterLinkActive, AppRoutingModule, ReactiveFormsModule,HttpClientModule,CommonModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
