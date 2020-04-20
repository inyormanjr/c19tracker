import { Component, OnInit, Input } from '@angular/core';
import { Label, Color } from 'ng2-charts';
import { ChartType, ChartDataSets, ChartOptions } from 'chart.js';
import { Summary } from 'src/app/models/covid.info.summary';
import { ColorHelper } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-global-summary',
  templateUrl: './global-summary.component.html',
  styleUrls: ['./global-summary.component.css']
})
export class GlobalSummaryComponent implements OnInit {
@Input() summaryInfo: Summary;
  color: Color[];
  public barChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      labels: { fontColor: 'white' }
    },
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      xAxes: [{
        ticks: { fontColor: 'white' },
        gridLines: { color: 'rgba(255,255,255,0.1)' }
      }],
      yAxes: [{
        ticks: { fontColor: 'white' },
        gridLines: { color: 'rgba(255,255,255,0.1)' }
      }]
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
        color: { fontColor: 'white' }
      }
    }
  };

   barChartType: ChartType = 'bar';
   showLegend = true;

   barChartsLabelConfirmedCases: Label[] = [];
   confirmedCasesChart: ChartDataSets[] = [];


  barChartsLabelDeathsCases: Label[] = [];
  deathsCases: ChartDataSets[] = [];

  barChartsLabelRecoveredCases: Label[] = [];
  recoveredCases: ChartDataSets[] = [];

  constructor() {}

  ngOnInit(): void {
    this.generateConfirmedCasesData();
    this.generateDeathsCasesData();
    this.generateRecoveredCasesData();
  }

  private generateConfirmedCasesData() {
    const dataTotalConfirmed = [];
    this.summaryInfo.Countries.sort((a, b) => (a.TotalConfirmed < b.TotalConfirmed) ? 1 : -1)
      .splice(0, 8).forEach(x => {
        this.barChartsLabelConfirmedCases.push(x.Slug);
        dataTotalConfirmed.push(x.TotalConfirmed);
      });
    this.confirmedCasesChart.push({ data: dataTotalConfirmed, label: 'Confirmed' });
  }

  private generateDeathsCasesData() {
    const dataTotalDeath = [];
    this.summaryInfo.Countries.sort((a, b) => (a.TotalDeaths < b.TotalDeaths) ? 1 : -1)
      .splice(0, 8).forEach(x => {
        this.barChartsLabelDeathsCases.push(x.Slug);
        dataTotalDeath.push(x.TotalDeaths);
      });
    this.deathsCases.push({ data: dataTotalDeath, label: 'Deaths' });
  }

  private generateRecoveredCasesData() {
    const dataTotalRecovered = [];
    this.summaryInfo.Countries.sort((a, b) => (a.TotalDeaths < b.TotalDeaths) ? 1 : -1)
      .splice(0, 8).forEach(x => {
        this.barChartsLabelRecoveredCases.push(x.Slug);
        dataTotalRecovered.push(x.TotalDeaths);
      });
    this.recoveredCases.push({ data: dataTotalRecovered, label: 'Recovered' });
  }

   // events
   public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
