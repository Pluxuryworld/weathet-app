import {Component} from '@angular/core';
import { RequestService} from "./services/request.service";
import {BehaviorSubject, catchError, Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-app';
  result$: BehaviorSubject<any>= new BehaviorSubject<any>(null);
  isError$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(private requestService: RequestService) {
  }



  performSearch(cityName:string){
    this.requestService.search(cityName).subscribe({
      next: result => {
        this.isError$.next(false);
        this.result$.next(result)
      },
      error: err => this.isError$.next(true)
    });

  }

}
