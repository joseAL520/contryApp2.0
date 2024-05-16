import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';


@Injectable({providedIn: 'root'})


export class CountryService {
    
    private  apiUrl: string = 'https://restcountries.com/v3.1';
    
    constructor( private _http: HttpClient  ) { }

    
    searchCapital( term: string ): Observable<Country[]>{
       return this._http.get<Country[]>(`${this.apiUrl}/capital/${term}`)
                .pipe(
                    catchError( () =>  of ([]) )
                );
    }

}

