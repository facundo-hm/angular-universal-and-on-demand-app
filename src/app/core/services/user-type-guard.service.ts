import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

import { JwtService } from './jwt.service';

@Injectable()
export class UserTypeGuard implements CanActivate {
  constructor(
    private router: Router,
    private jwtService: JwtService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot
  ): boolean {
    const token = this.jwtService.decodeToken();
    const { userType } = route.data;

    if (token && userType.indexOf(token.type) > -1) {
      return true;
    }
    
    this.router.navigateByUrl('/login');

    return;
  }
}
