import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import {
  HttpTokenInterceptor,
  JwtService,
  ApiService,
  UserService,
  UserTypeGuard
} from './index';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptor,
      multi: true
    },
    JwtService,
    ApiService,
    UserService,
    UserTypeGuard
  ],
  declarations: []
})
export class CoreModule { }
