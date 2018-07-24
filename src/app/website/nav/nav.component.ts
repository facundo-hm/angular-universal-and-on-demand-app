import { Component, Input, HostListener } from '@angular/core';

import { IntercomComponent } from '../../shared/intercom/intercom.component'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @Input() intercom: IntercomComponent;

  showIntercom() {
    this.intercom.show();
  }
}
