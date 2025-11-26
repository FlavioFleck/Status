import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL = 'http://localhost:5010/auth';

  isLoggedIn$ = new BehaviorSubject<boolean>(false);
  user$ = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    if (token && user) {
      this.isLoggedIn$.next(true);
      this.user$.next(JSON.parse(user));
    }
  }

  register(data: any) {
    return this.http.post(`${this.API_URL}/register`, data);
  }
  
  login(data: any) {
    return this.http.post(`${this.API_URL}/login`, data);
  }

  setSession(token: string, user: any) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));

    this.isLoggedIn$.next(true);
    this.user$.next(user);
  }

  logout() {
    localStorage.clear();
    this.isLoggedIn$.next(false);
    this.user$.next(null);
  }
}
