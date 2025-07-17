import { Component } from '@angular/core';
import { SignUpFormComponent } from '../../components/sign-up-form/sign-up-form.component';

import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [SignUpComponent, ButtonComponent, SignUpFormComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

}
