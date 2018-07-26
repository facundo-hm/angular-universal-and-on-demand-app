import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';

import { LoginComponent, LogoutComponent } from './index';

@NgModule({
  imports: [
    SharedModule,
    AuthRoutingModule
  ],
  declarations: [LoginComponent, LogoutComponent]
})
export class AuthModule { }
