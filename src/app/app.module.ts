import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchGeoComponent } from './components/search-geo/search-geo.component';
import { WeatherComponent } from './components/weather/weather.component';
import { IndicatorsComponent } from './components/indicators/indicators.component';
import { ErrorLocationComponent } from './components/error-location/error-location.component';
import { IndicatorComponent } from './components/indicator/indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchGeoComponent,
    WeatherComponent,
    IndicatorsComponent,
    ErrorLocationComponent,
    IndicatorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
