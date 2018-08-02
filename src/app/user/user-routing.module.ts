import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  UserComponent,
  OverviewComponent,
  AccountComponent
} from './index';
import { UserTypeGuard } from '../core';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    canActivate: [UserTypeGuard],
    data: { userType: ['user'] },
    children: [
      {
        path: 'account',
        component: AccountComponent
      },
      {
        path: '',
        component: OverviewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
