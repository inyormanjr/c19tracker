import { Component, OnInit, Input } from '@angular/core';
import { single } from '../../data';
import { CovidData } from 'src/app/models/covid.data';
@Component({
  selector: 'app-advance-pie-chart',
  templateUrl: './advance-pie-chart.component.html',
  styleUrls: ['./advance-pie-chart.component.css']
})
export class AdvancePieChartComponent implements OnInit {
  @Input() covidData: CovidData;
  single: any[];
  view: any[] = [400, 450 ];

  // options
  gradient = true;
  showLegend = true;
  showLabels = true;
  isDoughnut = false;
  chartData: any;
  constructor() {
    Object.assign(this, {single});
  }
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  async ngOnInit() {
      this.chartData = [
        {name: 'cases', value: this.covidData.cases},
        {name: 'deaths', value: this.covidData.deaths},
        {name: 'recovered', value: this.covidData.recovered},
        {name: 'active', value: this.covidData.active},
      ];
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

}
