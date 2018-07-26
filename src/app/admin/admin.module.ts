import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import {
  AdminComponent,
  AccountComponent,
  OverviewComponent
} from './index';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    AccountComponent,
    OverviewComponent
  ]
})
export class AdminModule { }
