import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { HomePagesComponent } from './pages/homePages/homePages.component';
import { AboutComponent } from './pages/about/about.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';





@NgModule({
  declarations: [
    HomePagesComponent,
    AboutComponent,
    SidebarComponent,
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
  HomePagesComponent,
  AboutComponent,
  SidebarComponent,
  ContactPageComponent
  ]
})
export class SharedModule { }
