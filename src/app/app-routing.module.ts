import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'app1',
    loadChildren: './app1/app1.module#App1'
  },
  {
    path: 'app2',
    loadChildren: './app2/app2.module#App2'
  },
  {
    path: 'app3',
    loadChildren: './app3/app3.module#App3'
  },
  {
    path: '',
    loadChildren:'./website/website.module#WebsiteModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
