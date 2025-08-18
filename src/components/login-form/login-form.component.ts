import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService, AuthResult } from '../../services/Auth/auth.service';

@Component({
  selector: 'login-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  form: FormGroup;
  loading = false;
  error: string | null = null;

  private accessToken: string | null = null;
  private refreshToken: string | null = null;
  private userId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router 
  ) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

onSubmit(): void {
  if (this.form.invalid) return;
  const { username, password } = this.form.value;

  this.auth.login(username, password).subscribe({
    next: (res: AuthResult) => {
      // Guardar tokens en memoria
      this.accessToken = res.accessToken;
      this.refreshToken = res.refreshToken;
      this.userId = res.userId;

      // Redirigir al dashboard o página principal
      this.router.navigate(['/dashboard']); 
    },
    error: (err) => {
      console.error('Login failed', err);
    }
  });
}

  getAccessToken(): string | null { return this.accessToken; }
  getRefreshToken(): string | null { return this.refreshToken; }
  getUserId(): string | null { return this.userId; }
}
