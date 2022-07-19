import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountrysService {

  constructor(private http:HttpClient) { }

  getAllCountrys():Observable<any[]>{
    return this.http.get<any[]>('https://restcountries.com/v3.1/all');
  }
}
