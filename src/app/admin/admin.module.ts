import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {
  AdminComponent,
  AccountComponent,
  OverviewComponent
} from './index';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    AccountComponent,
    OverviewComponent
  ]
})
export class AdminModule { }
