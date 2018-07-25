import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { WebsiteComponent } from './website.component';
import { SharedModule } from '../shared/shared.module';
import { NavComponent } from './nav/nav.component';
import { WebsiteContentComponent } from './website-content.component'


@NgModule({
  declarations: [
    WebsiteComponent,
    NavComponent,
    WebsiteContentComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: WebsiteComponent,
        children: [
          {
            path: '',
            component: WebsiteContentComponent,
          }
        ]
      },
    ]),
    TransferHttpCacheModule
  ],
  providers: [],
})
export class WebsiteModule { }
