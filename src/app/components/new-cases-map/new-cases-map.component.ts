import { Component, OnInit, Input } from '@angular/core';
import { Summary } from 'src/app/models/covid.info.summary';
import { CountrySummary } from 'src/app/models/country';
import { CountryCoords } from 'src/app/models/countryCoords';
import { CountryMap } from 'src/app/models/countryMap';

@Component({
  selector: 'app-new-cases-map',
  templateUrl: './new-cases-map.component.html',
  styleUrls: ['./new-cases-map.component.css']
})
export class NewCasesMapComponent implements OnInit {
  @Input() summaryInfo: Summary;
  @Input() countriesWithCoords: CountryCoords[];
  countriesWithNewCases: CountrySummary[];
  countriesMap: CountryMap[] = [];
  constructor() { }

  ngOnInit(): void {
    this.generateCountriesWithNewCases();
  }

  private generateCountriesWithNewCases() {
    this.countriesWithNewCases = this.summaryInfo.Countries.filter(x => x.NewConfirmed > 0 || x.NewDeaths > 0 || x.NewRecovered > 0);
    this.countriesWithNewCases.forEach(x => {
      const latlong = this.countriesWithCoords.find(cwc => cwc.name.toLowerCase() === x.Country.toLowerCase()).latlng;
      if (latlong) {
        this.countriesMap.push({countryName: x.Country, latlng: latlong, NewConfirmedCase: x.NewConfirmed,
          NewDeathCase: x.NewDeaths, NewRecovered: x.NewRecovered });
      }
    });
  }

}
