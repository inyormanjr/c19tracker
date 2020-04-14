import { Component, OnInit } from '@angular/core';
import { CovidApiService } from './services/covid-api.service';
import { GlobalInfo } from './models/covid.global';
import { Observable } from 'rxjs';
import { CovidData } from './models/covid.data';
import { single } from '../app/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  globalInfo$: Observable<GlobalInfo>;
  covidData$: Observable<CovidData[]>;
  currentDate: Date = new Date();
  view: any[] = [350, 400];
  units = 'counts';
  colorScheme = {
    domain: [ '#FF5627']
  };
  colorScheme1 = {
    domain: [ '#C90035']
  };

  colorScheme3 = {
    domain: [ '#529C77']
  };

  colorSchemeChart = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  title = 'COVID-APP';
  constructor(private covidServce: CovidApiService) {
    this.globalInfo$ = this.covidServce.getGlobalCovidInfo();
    this.covidData$ = this.covidServce.getAllData();
    Object.assign(this, { single });
  }
  ngOnInit() {
  }

  onSelect(event) {
    console.log(event);
  }
}
