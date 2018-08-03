import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  rootItem = {
    name: 'User App',
    link: '/user'
  };

  navItems = [
    {
      name: 'Overview',
      link: './'
    },
    {
      name: 'Acoount',
      link: './account'
    },
    {
      name: 'Logout',
      link: '/logout'
    }
  ]
}
