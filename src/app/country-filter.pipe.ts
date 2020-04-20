import { Pipe, PipeTransform } from '@angular/core';
import { CovidData } from './models/covid.data';

@Pipe({
  name: 'countryFilter'
})
export class CountryFilterPipe implements PipeTransform {

  transform(covidDatas: CovidData[], searchTerm: string): CovidData[] {
    if (!covidDatas || !searchTerm) {
      return covidDatas;
    }

    return covidDatas.filter(data => data.country.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }

}
