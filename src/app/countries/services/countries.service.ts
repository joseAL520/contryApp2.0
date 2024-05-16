import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';


@Injectable({providedIn: 'root'})


export class CountryService {
    
    
    // https://restcountries.com/v3.1/region/{region}
    // https://restcountries.com/v3.1/name/{name}? 


    private  apiUrl: string = 'https://restcountries.com/v3.1';
    
    constructor( private _http: HttpClient  ) { }

    
    searchCapital( term: string ): Observable<Country[]>{
       return this._http.get<Country[]>(`${this.apiUrl}/capital/${term}`)
                .pipe(
                    catchError( () =>  of ([]) )
                );
    }


    searchCountry( term: string): Observable<Country[]>{
        return this._http.get<Country[]>(`${this.apiUrl}/name/${term}`)
        .pipe(
            catchError( () =>  of ([]) )
        );
    }
    

    searchRegion( term: string): Observable<Country[]>{
        return this._http.get<Country[]>(`${this.apiUrl}/region/${term}`)
        .pipe(
            catchError( () =>  of ([]) )
        );
    }
    

}

