import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import * as ngxanimiate from 'ngx-animate';
@Component({
  selector: 'app-covid-info',
  templateUrl: './covid-info.component.html',
  styleUrls: ['./covid-info.component.css'],
  animations: [
    trigger('bounce', [transition('*=>*', useAnimation(ngxanimiate.bounce))]),
    trigger('ease-in', [transition('*=>*', useAnimation(ngxanimiate.fadeIn))]),
    trigger('flipper', [transition('*=>*', useAnimation(ngxanimiate.flip, {params: {timing: 2, delay: 1}}))]),
    trigger('slide-in-right', [transition('*=>*', useAnimation(ngxanimiate.slideInRight))])
  ]
})
export class CovidInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
