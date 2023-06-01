import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchGeoComponent } from './components/search-geo/search-geo.component';
import { WeatherComponent } from './components/weather/weather.component';
import { IndicatorsComponent } from './components/indicators/indicators.component';
import { ErrorLocationComponent } from './components/error-location/error-location.component';
import { HumidityComponent } from './components/humidity/humidity.component';
import { WindComponent } from './components/wind/wind.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchGeoComponent,
    WeatherComponent,
    IndicatorsComponent,
    ErrorLocationComponent,
    HumidityComponent,
    WindComponent,

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
