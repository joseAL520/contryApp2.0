import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { HomePagesComponent } from './pages/homePages/homePages.component';
import { AboutComponent } from './pages/about/about.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoadinComponentsComponent } from './components/loadin-components/loadin-components.component';





@NgModule({
  declarations: [
    HomePagesComponent,
    AboutComponent,
    SidebarComponent,
    ContactPageComponent,
    SearchBoxComponent,
    LoadinComponentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
  HomePagesComponent,
  AboutComponent,
  SidebarComponent,
  ContactPageComponent,
  SearchBoxComponent,
  LoadinComponentsComponent
  ]
})
export class SharedModule { }
