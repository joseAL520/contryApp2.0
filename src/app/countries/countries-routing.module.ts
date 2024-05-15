import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';

import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByContryPageComponent } from './pages/by-contry-page/by-contry-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';


const routers: Routes = [
    {
        path:'by-capital',
        component: ByCapitalPageComponent
    },
    {
        path:'by-contry',
        component:ByContryPageComponent
    },
    {
        path:'by-region',
        component:ByRegionPageComponent
    },
    {
        path:'by/:id',
        component:CountryPageComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routers)],
    exports: [
        RouterModule
    ],
})
export class ContriesRoutingModule { }
