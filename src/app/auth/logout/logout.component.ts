import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
    this.userService
      .logoutAuth()
      .subscribe(
        () => {
          this.router.navigateByUrl('/login');
        },
        err => {
          this.errors = err;
        }
      );
  }
}
