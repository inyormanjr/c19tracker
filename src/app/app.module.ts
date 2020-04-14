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
@NgModule({
  declarations: [
    AppComponent,
    AdvancePieChartComponent,
    HomeComponent,
    CountriesComponent,
    CovidInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    NgxNavbarModule,
    CarouselModule,
    NgxPaginationModule,
    AnimateOnScrollModule.forRoot()
  ],
  providers: [
    CovidApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
