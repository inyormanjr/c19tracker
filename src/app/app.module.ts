import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CovidApiService } from './services/covid-api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AdvancePieChartComponent } from './components/advance-pie-chart/advance-pie-chart.component';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { HomeComponent } from './home/home.component';
import { CountriesComponent } from './countries/countries.component';
import { CovidInfoComponent } from './covid-info/covid-info.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {NgxPaginationModule} from 'ngx-pagination';

import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { CountryFilterPipe } from './country-filter.pipe';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { CountryResolve, CovidSummaryResolver } from './resolvers/home.resolver';
import {NgPipesModule} from 'ngx-pipes';
import { GlobalSummaryComponent } from './charts/global-summary/global-summary.component';
import { NewCasesMapComponent } from './components/new-cases-map/new-cases-map.component';
@NgModule({
  declarations: [
    AppComponent,
    AdvancePieChartComponent,
    HomeComponent,
    CountriesComponent,
    CovidInfoComponent,
    CountryFilterPipe,
    GlobalSummaryComponent,
    NewCasesMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgPipesModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA2sk0MT31v0qB6HIoTdu9tfP9Lb11BUvg'
    }),
    HttpClientModule,
    NgbModule,
    NgxChartsModule,
    ChartsModule,
    BrowserAnimationsModule,
    NgxNavbarModule,
    CarouselModule,
    NgxPaginationModule,
    AnimateOnScrollModule.forRoot()
  ],
  providers: [
    CovidApiService,
    CountryResolve,
    CovidSummaryResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
