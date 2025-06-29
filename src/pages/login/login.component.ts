import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { LoginFormComponent } from "../../components/login-form/login-form.component";
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'login',
  standalone: true,
  imports: [NavBarComponent, LoginFormComponent, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
