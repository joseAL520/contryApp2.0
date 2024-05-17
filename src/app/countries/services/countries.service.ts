import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of } from 'rxjs';
import { Country } from '../interfaces/country';


@Injectable({providedIn: 'root'})


export class CountryService {
    
    
    private  apiUrl: string = 'https://restcountries.com/v3.1';
    
    constructor( private _http: HttpClient  ) { }


    private geCountriesRequest( url: string): Observable <Country[]>{
        return this._http.get<Country[]>(url)
                .pipe(
                    catchError( () =>  of ([]) ),
                    delay(2000),
                );  
    }
    
    searchCapital( term: string ): Observable<Country[]>{
        const url = `${this.apiUrl}/capital/${term}`
       return  this.geCountriesRequest( url);
    }


    searchByCountry( code: string ): Observable<Country | null> {
        const url = `${ this.apiUrl }/alpha/${ code }`;
        return this._http.get<Country[]>( url )
          .pipe(
            map( countries => countries.length > 0 ? countries[0]: null ),
            catchError( () => of(null) )
        );
    }

    searchCountry( term: string): Observable<Country[]>{
        const url = `${this.apiUrl}/name/${term}`;
        return this.geCountriesRequest( url );
    }
    

    searchRegion( term: string): Observable<Country[]>{
        const url = `${this.apiUrl}/region/${term}`;
        return this.geCountriesRequest(url);
    }
    

}

