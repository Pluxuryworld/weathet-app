import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.scss']
})
export class IndicatorComponent {

  @Input() icon: string = '';
  @Input() value: number = 0;
  @Input() description: string = '';



}
