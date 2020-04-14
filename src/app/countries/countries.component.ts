import { Component, OnInit } from '@angular/core';
import { CovidApiService } from '../services/covid-api.service';
import { CovidData } from '../models/covid.data';
import { Observable } from 'rxjs';
import { map, filter, catchError, mergeMap, take } from 'rxjs/operators';
import { trigger, transition, useAnimation } from '@angular/animations';
import * as ngxanimiate from 'ngx-animate';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
  animations: [
    trigger('bounce', [transition('*=>*', useAnimation(ngxanimiate.bounce))]),
    trigger('ease-in', [transition('*=>*', useAnimation(ngxanimiate.fadeIn, {params: {timing: 1, delay: 1}}))]),
    trigger('flipper', [transition('*=>*', useAnimation(ngxanimiate.flip, {params: {timing: 1, delay: 1}}))]),
    trigger('slide-in-right', [transition('*=>*', useAnimation(ngxanimiate.slideInRight))])
  ]
})
export class CountriesComponent implements OnInit {
  allData$: Observable<CovidData []>;
  allCountries$: Observable<CovidData []>;
  continentData$: Observable<CovidData []>;
  p1 = 1;
  constructor(private covidDataservice: CovidApiService) { }

  ngOnInit(): void {
    this.allData$ = this.covidDataservice.getAllData().pipe(map(datas => datas.filter(data => data.country !== '')))
    .pipe(map(datas => datas.filter(data => data.country !== 'Total:')));
    this.allCountries$ = this.allData$.pipe(map(x => x.slice(7, x.length)));
    this.initializeContinentData();
  }

  initializeContinentData() {
    this.continentData$ = this.allData$.pipe(map(x => x.slice(0, 7)));
  }
  pageChanged($event) {
  }
}
