import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import {
  UserComponent,
  OverviewComponent,
  AccountComponent
} from './index';
import { SharedModule } from '../shared/shared.module'

@NgModule({
  imports: [
    SharedModule,
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
