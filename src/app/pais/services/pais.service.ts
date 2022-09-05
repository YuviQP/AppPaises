import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Capital } from '../interfaces/capital-interface';
import { Country } from '../interfaces/pais-interface';
import { Region } from '../interfaces/region-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl:string='https://restcountries.com/v2';
  constructor(private http:HttpClient) {}

  buscarPais(termino:string):Observable <Country []>{
    const url=`${this.apiUrl}/name/${termino}`;
    return this.http.get<Country []>(url);
  }

  buscarCapital(termino:string):Observable <Country[]>{
    const url=`${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country []>(url);
  }

  buscarRegion(termino:string):Observable <Country []>{
    const params=new HttpParams().set('fields','name,capital,alpha2code,flag,population');
    const url=`${this.apiUrl}/region/${termino}`;
    return this.http.get<Country []>(url,{params})
            .pipe(
              tap(console.log)
            );
  }


  getPaisPorAlpha(id:string):Observable <Country >{
    const url=`${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

}
