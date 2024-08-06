import { AuthService } from '../../services/auth.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private authService = inject(AuthService)

  login() {
    this.authService.login();
  }
}
