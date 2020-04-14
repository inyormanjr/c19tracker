import { Component, OnInit } from '@angular/core';
import { CovidApiService } from '../services/covid-api.service';
import { Observable } from 'rxjs';
import { GlobalInfo } from '../models/covid.global';
import { CovidData } from '../models/covid.data';
import { single } from '../data';
import { trigger, transition, useAnimation } from '@angular/animations';
import * as ngxanimiate from 'ngx-animate';

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
  globalInfo$: Observable<GlobalInfo>;
  covidData$: Observable<CovidData[]>;
  currentDate: Date = new Date();
  view: any[] = [300, 400];
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

  ngOnInit(): void {
  }
  
  onSelect(event) {
    console.log(event);
  }

}
