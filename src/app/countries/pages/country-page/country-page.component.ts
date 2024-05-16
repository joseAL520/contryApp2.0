import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../services/countries.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit{


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countryService: CountryService,
  ){}


  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.countryService.searchByCountry( id ) )
      )
      .subscribe(  resp =>{
          if(!resp){
            return  this.router.navigateByUrl('/countries/by-capital');
          }
          console.log('tenemos pais')

          return;
      })
  }




  
}
