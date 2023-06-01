import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) {}

  search(cityName: string):Observable<Object>{
    const apiKey = '66165d4645efb3e3950f134f851a2398';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=en&units=metric&appid=${apiKey}`;

    return this.http.get(url);
  }

}
