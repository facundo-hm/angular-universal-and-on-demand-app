import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { take, map } from 'rxjs/operators';

import { UserService, Errors } from '../../core';

@Component({
	selector: 'app-logout',
	template: '<div>Logout</div>'
})
export class LogoutComponent{
  errors: Errors;

  constructor (
    private userService: UserService,
    private router: Router
  ) {
    this.userService.isAuthenticated.pipe(take(1), map(isAuthenticated => {
      if (isAuthenticated) {
        return this.userService.logoutAuth().subscribe(
          () => {
            this.router.navigateByUrl('/');
          },
          err => {
            this.errors = err;
          }
        );
      }

      this.router.navigateByUrl('/login');

      return null;
    })).subscribe();
  }
}
