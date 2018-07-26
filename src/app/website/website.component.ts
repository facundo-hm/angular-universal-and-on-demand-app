import { Component } from '@angular/core';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styles: []
})
export class WebsiteComponent {
  rootItem = {
    name: 'App',
    link: '/.'
  };

  navItems = [
    {
      name: 'Login',
      link: '/login'
    }
  ]
}
