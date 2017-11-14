import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule} from '@angular/router';

import { AppComponent }  from './app.component';
import {boxComponent} from '../app/box/box.component';
import {navComponent} from '../app/nav/nav.component';
import {menuComponent} from '../app/menu/menu.component';
import {allSortComponent} from '../app/allSort/allSort.component';
import {contentComponent} from '../app/content/content.component';
import {siglComponent} from '../app/siglgame/sigl.component';
import {wangComponent} from '../app/wangyou/wangyou.component';
import {shouComponent} from '../app/shouyou/shouyou.component';
import {yuleComponent} from '../app/yule/yule.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'',
        component:allSortComponent
      },
      {
        path:'sort',
        component:allSortComponent
      },
      {
        path:'content',
        component:contentComponent
      },
      {
        path:'sigl',
        component:siglComponent
      },
      {
        path:'wang',
        component:wangComponent
      },
      {
        path:'shou',
        component:shouComponent
      },
      {
        path:'yule',
        component:yuleComponent
      }
    ])
  ],
  declarations: [ yuleComponent,shouComponent,wangComponent,siglComponent,AppComponent,boxComponent,navComponent,menuComponent,allSortComponent,contentComponent],
  bootstrap:    [ AppComponent ],
  
})

export class AppModule { }
