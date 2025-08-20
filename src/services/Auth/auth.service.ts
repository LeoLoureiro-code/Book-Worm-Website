import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = "https://localhost:7046/Auth";
 
  constructor(private http: HttpClient){}

  getData(): Observable<any> {
    return this.http.get(`${this.URL}+login`);
  }
}

export interface AuthResult {
  accessToken: string;
  refreshToken: string;
  userId: string | null;
}
