
import { Component } from '@angular/core';
import { UserDTO } from 'src/app/models/user/user-dto.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  userDTO: UserDTO = new UserDTO('', '', '', '', new Date(), ''); // Initialize with default values

  constructor(private authService: AuthService) {}

  onSubmit(): void {
    this.authService.register(this.userDTO);
  }
}