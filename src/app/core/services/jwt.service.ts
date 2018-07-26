import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import jwtToken from 'jwt-decode';

@Injectable()
export class JwtService {
  constructor(@Inject(PLATFORM_ID) protected platformId: Object) {}

  getToken(): String {
    if (!isPlatformBrowser(this.platformId)) {
      return null;
    }

    return window.localStorage['jwtToken'];
  }

  saveToken(token: String) {
    window.localStorage['jwtToken'] = token;
  }

  destroyToken() {
    window.localStorage.removeItem('jwtToken');
  }

  decodeToken(): any {
    const token: String = this.getToken();

    if (!token) {
      return null;
    }

    return jwtToken(token);
  }
}
