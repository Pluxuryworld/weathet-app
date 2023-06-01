import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {

  @Input() temperature: number = 0;
  @Input() weather: string = '';
  @Input() location: string = '';
  @Input() description: string = '';

}
