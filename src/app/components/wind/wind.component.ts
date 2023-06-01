import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-wind',
  templateUrl: './wind.component.html',
  styleUrls: ['./wind.component.scss']
})
export class WindComponent {

  @Input() indicator: any;

}
