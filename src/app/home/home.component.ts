import { Component, OnInit } from '@angular/core';
import { CovidApiService } from '../services/covid-api.service';
import { Observable, pipe } from 'rxjs';
import { GlobalInfo } from '../models/covid.global';
import { CovidData } from '../models/covid.data';
import { single } from '../data';
import { trigger, transition, useAnimation } from '@angular/animations';
import * as ngxanimiate from 'ngx-animate';
import { ActivatedRoute } from '@angular/router';
import { country } from '../models/country';
import { CovidInfo } from '../models/covid.info';
import { map } from 'rxjs/operators';
import { CountryCoords } from '../models/countryCoords';
import { Summary } from '../models/covid.info.summary';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('bounce', [transition('*=>*', useAnimation(ngxanimiate.bounce))]),
    trigger('ease-in', [transition('*=>*', useAnimation(ngxanimiate.fadeIn))]),
    trigger('flipper', [transition('*=>*', useAnimation(ngxanimiate.flip, {params: {timing: 1, delay: 1}}))]),
    trigger('slide-in-right', [transition('*=>*', useAnimation(ngxanimiate.slideInRight))])
  ]
})
export class HomeComponent implements OnInit {
  countryList: country[];
  currentCountryName = '';
  countriesWithCoords: CountryCoords[];
  summary: Summary;
  covidInfo$: Observable<CovidInfo[]>;
  globalInfo$: Observable<GlobalInfo>;
  covidData$: Observable<CovidData[]>;
  currentDate: Date = new Date();
  view: any[] = [300, 400];
  latitude: number;
  longtitude: number;
  units = 'counts';
  colorScheme0 = {
    domain: [ '#FF5627']
  };
  colorScheme1 = {
    domain: [ '#C90035']
  };

  colorScheme3 = {
    domain: [ '#529C77']
  };

  title = 'COVID-APP';
  constructor(private covidServce: CovidApiService, private activatedRoute: ActivatedRoute) {
    this.globalInfo$ = this.covidServce.getGlobalCovidInfo();
    this.covidData$ = this.covidServce.getAllData();
    Object.assign(this, { single });

  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(result => {
      this.countriesWithCoords = result.countries;
      this.summary = result.summary;
    }).unsubscribe();
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  countrySelectionChange($event) {
    console.log(this.currentCountryName);
  }
}
