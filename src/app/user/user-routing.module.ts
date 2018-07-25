import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  UserComponent,
  OverviewComponent,
  AccountComponent
} from './index';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
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
