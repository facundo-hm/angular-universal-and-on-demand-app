import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { UserResponse } from '../models';

@Injectable()
export class UserService {
  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor (
    private apiService: ApiService,
    private jwtService: JwtService
  ) {}
  setAuth(token: string) {
    this.jwtService.saveToken(token);
    this.isAuthenticatedSubject.next(true);
  }

  purgeAuth() {
    this.jwtService.destroyToken();
    this.isAuthenticatedSubject.next(false);
  }

  attemptAuth(credentials): Observable<string> {
    return this.apiService.post('users/login', { user: credentials })
      .pipe(map(
        (data: UserResponse) => {
          const { user } = data;

          this.setAuth(user.token);

          const token = this.jwtService.decodeToken();

          return token.type;
        }
    ));
  }

  logoutAuth() {
    return this.apiService.get('users/logout')
      .pipe(map((res) => {
        this.purgeAuth();
        
        return res.logout;
      }));
  }
}
