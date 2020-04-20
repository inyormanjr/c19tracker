import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CountriesComponent } from './countries/countries.component';
import { CovidInfoComponent } from './covid-info/covid-info.component';
import { CountryResolve, CovidSummaryResolver } from './resolvers/home.resolver';


const routes: Routes = [{path: '', pathMatch: 'full',
                         redirectTo: 'home'},
                        {path: 'home', component: HomeComponent, resolve: {countries: CountryResolve, summary: CovidSummaryResolver}},
                        {path: 'countries', component: CountriesComponent},
                        {path: 'covid-info', component: CovidInfoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
