import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  AdminComponent,
  AccountComponent,
  OverviewComponent
} from './index';
import { UserTypeGuard } from '../core';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [UserTypeGuard],
    data: { userType: ['admin'] },
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
export class AdminRoutingModule { }
