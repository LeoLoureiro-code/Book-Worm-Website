import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthResult } from '../../interfaces/AuthResult';
import { Credentials } from '../../interfaces/Credentials';
import { BehaviorSubject, tap, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenKey = 'access_token';
  private refreshTokenKey = 'refresh_token';
  private userIdKey = 'user_id';

  private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<AuthResult>('/api/login', { username, password }).pipe(
      tap(res => this.storeTokens(res))
    );
  }

  private storeTokens(res: AuthResult) {
    localStorage.setItem(this.tokenKey, res.accessToken);
    localStorage.setItem(this.refreshTokenKey, res.refreshToken);
    localStorage.setItem(this.userIdKey, res.userId.toString());
    this.isLoggedInSubject.next(true);
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.refreshTokenKey);
    localStorage.removeItem(this.userIdKey);
    this.isLoggedInSubject.next(false);
  }

  getAccessToken() {
    return localStorage.getItem(this.tokenKey);
  }

  getRefreshToken() {
    return localStorage.getItem(this.refreshTokenKey);
  }

  getUserId() {
    return localStorage.getItem(this.userIdKey);
  }

  hasToken() {
    return !!localStorage.getItem(this.tokenKey);
  }

  refreshAccessToken() {
    const refresh_token = this.getRefreshToken();
    return this.http.post<{ access_token: string }>('/api/refresh', { refresh_token }).pipe(
      tap(res => localStorage.setItem(this.tokenKey, res.access_token))
    );
  }
}

