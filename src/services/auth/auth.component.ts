import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  userId: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7046/api/Auth';
  private accessToken: string | null = null;
  private refreshToken: string | null = null;
  private userId: string | null = null;

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, { username, password })
      .pipe(
        tap(response => {
          this.accessToken = response.accessToken;
          this.refreshToken = response.refreshToken;
          this.userId = response.userId;
          this.isLoggedInSubject.next(true);
        })
      );
  }

  logout(): void {
    this.accessToken = null;
    this.refreshToken = null;
    this.userId = null;
    this.isLoggedInSubject.next(false);
  }

  getAccessToken(): string | null {
    return this.accessToken;
  }

  getRefreshToken(): string | null {
    return this.refreshToken;
  }

  getUserId(): string | null {
    return this.userId;
  }
}