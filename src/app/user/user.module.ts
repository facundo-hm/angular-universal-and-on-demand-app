import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {
  UserComponent,
  OverviewComponent,
  AccountComponent
} from './index';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [
    UserComponent,
    OverviewComponent,
    AccountComponent
  ],
  providers: []
})
export class UserModule { }
