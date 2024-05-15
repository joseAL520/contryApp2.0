import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomePagesComponent } from './pages/homePages/homePages.component';
import { AboutComponent } from './pages/about/about.component';





@NgModule({
  declarations: [
    HomePagesComponent,
    AboutComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
  HomePagesComponent,
  AboutComponent  
  ]
})
export class SharedModule { }
