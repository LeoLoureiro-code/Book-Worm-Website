import { Component } from '@angular/core';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [LoginFormComponent, ButtonComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

}
