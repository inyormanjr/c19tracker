import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { country } from '../models/country';
import { CovidApiService } from '../services/covid-api.service';
import { catchError } from 'rxjs/operators';
import { CountryCoords } from '../models/countryCoords';
import { Summary } from '../models/covid.info.summary';


@Injectable()
export class CountryResolve implements Resolve<CountryCoords[]> {
  constructor(private covidService: CovidApiService,
              private route: Router) {

              }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CountryCoords[]>  {
    return this.covidService.getCountriesWithCoords().pipe(
      catchError((error) => {
          console.log(error);
          return of(null);
      })
  );
  }
}

@Injectable()
export class CovidSummaryResolver implements Resolve<Summary> {
  constructor(private covidService: CovidApiService, private route: Router) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Summary> {
    return this.covidService.getAllDataSummary().pipe(
      catchError((error) => {
          console.log(error);
          return of(null);
      })
  );
  }
}
