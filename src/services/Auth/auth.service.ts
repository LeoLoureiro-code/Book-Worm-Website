import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7046/Bookworm/Auth/login';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<AuthResult> {
    return this.http.post<AuthResult>(this.apiUrl, { 
      email: username, 
      password: password 
    }).pipe(
      map((res) => {
        return {
          accessToken: res.accessToken,
          refreshToken: res.refreshToken,
          userId: res.userId,
        };
      })
    );
  }
}

export interface AuthResult {
  accessToken: string;
  refreshToken: string;
  userId: string | null;
}
