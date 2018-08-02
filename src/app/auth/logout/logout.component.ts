import { Component, OnInit } from '@angular/core';

import { UserService, Errors } from '../../core';

@Component({
	selector: 'app-logout',
	template: '<div>Logout</div>'
})
export class LogoutComponent implements OnInit {
  constructor (private userService: UserService) {}
  
  ngOnInit () {
    this.userService
      .logoutAuth()
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );
  }
}
