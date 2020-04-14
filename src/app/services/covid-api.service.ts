import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CovidData } from '../models/covid.data';
import { GlobalInfo } from '../models/covid.global';

@Injectable({
  providedIn: 'root'
})
export class CovidApiService {
   apiBaseUrl = 'https://coronavirus-19-api.herokuapp.com/';
  constructor(private http: HttpClient) { }

  getGlobalCovidInfo(): Observable<GlobalInfo> {
   return this.http.get<GlobalInfo>(this.apiBaseUrl + 'all');
  }

  getAllData(): Observable<CovidData[]> {
    return this.http.get<CovidData[]>(this.apiBaseUrl + 'countries');
  }

  getDataByCountry(countryName: string): Observable<CovidData> {
    return this.http.get<CovidData>(this.apiBaseUrl + countryName);
  }
}
