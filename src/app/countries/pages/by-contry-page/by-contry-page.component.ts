import { Component } from '@angular/core';
import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-contry-page',
  templateUrl: './by-contry-page.component.html',
  styles: ``
})
export class ByContryPageComponent {

  public countryName: Country[] = [];


  constructor( private countryService: CountryService ){}

  searchByCountry( term: string): void{
    this.countryService.searchCountry(term).subscribe( countryNambe => {
      this.countryName = countryNambe
    })
  } 

}
