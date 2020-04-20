import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CovidData } from '../models/covid.data';
import { GlobalInfo } from '../models/covid.global';
import { country } from '../models/country';
import { CovidInfo } from '../models/covid.info';
import { CountryCoords } from '../models/countryCoords';
import { Summary } from '../models/covid.info.summary';

@Injectable({
  providedIn: 'root'
})
export class CovidApiService {
    countriesWithCoordsUrl = 'https://gist.githubusercontent.com/erdem/8c7d26765831d0f9a8c62f02782ae00d/raw/248037cd701af0a4957cce340dabb0fd04e38f4c/countries.json';
    gmapApiKey = 'AIzaSyA2sk0MT31v0qB6HIoTdu9tfP9Lb11BUvg';
   apiBaseUrl = 'https://coronavirus-19-api.herokuapp.com/';
   apiBaseUrl2 = 'https://api.covid19api.com/';
   geocodeBaseUrl = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';
  constructor(private http: HttpClient) { }

  getCountriesWithCoords(): Observable<CountryCoords []> {
    return this.http.get<CountryCoords[]>(this.countriesWithCoordsUrl);
  }

  getCurrentLocationCountry(lat, lng) {
    return this.http.get<any>(this.geocodeBaseUrl + lat + ',' + lng + '&key=' + this.gmapApiKey);
  }

  getCountries(): Observable<country> {
     return this.http.get<country>(this.apiBaseUrl2 + 'countries');
  }
  getAllDataSummary(): Observable<Summary> {
     return this.http.get<Summary>(this.apiBaseUrl2 + 'summary');
  }
  getAllDataByCountryName(countryName: string): Observable<CovidInfo []> {
    return this.http.get<CovidInfo []>(this.apiBaseUrl2 + 'country/' + countryName + '?from=2020-03-01T00:00:00Z&to=2020-04-17T00:00:00Z');
  }

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

