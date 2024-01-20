import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Component/register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Component/login/login.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent, RegisterComponent, LoginComponent, NavbarComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterOutlet, RouterLink, RouterLinkActive, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
