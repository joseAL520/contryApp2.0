import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByContryPageComponent } from './pages/by-contry-page/by-contry-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { ContriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CountryTableComponent } from './components/countryTable/countryTable.component';



@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByContryPageComponent,
    ByRegionPageComponent,
    CountryPageComponent,
    CountryTableComponent
  ],
  imports: [
    CommonModule,
    ContriesRoutingModule,
    SharedModule
  ]
})
export class CountriesModule { }
