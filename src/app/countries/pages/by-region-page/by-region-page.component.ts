import { Component } from '@angular/core';
import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {


  public byRegion: Country[] = []

  constructor( private countryService : CountryService){}

  searchByRegion( term: string): void{
    
    this.countryService.searchRegion(term).subscribe( regionName => {
        this.byRegion = regionName
      });

  }


}
