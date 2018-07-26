import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  rootItem = {
    name: 'Admin App',
    link: '/admin'
  };

  navItems = [
    {
      name: 'Overview',
      link: './'
    },
    {
      name: 'Acoount',
      link: './account'
    }
  ]
}
