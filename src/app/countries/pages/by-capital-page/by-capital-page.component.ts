import { Component } from '@angular/core';
import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public countries:Country[] = [];
  public isLoadin: boolean = false;
  constructor( private countryService:CountryService  ){

  }


 searchByCapital( term:string): void{
  this.isLoadin = true;
   this.countryService.searchCapital(term).subscribe( contris => {
      this.countries = contris;
      this.isLoadin = false;
   })
 }


}
