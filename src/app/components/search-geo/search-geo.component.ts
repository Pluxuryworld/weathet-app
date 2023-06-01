import {Component, EventEmitter, Output, } from '@angular/core';

@Component({
  selector: 'app-search-geo',
  templateUrl: './search-geo.component.html',
  styleUrls: ['./search-geo.component.scss']
})
export class SearchGeoComponent {
  @Output() searchQuery = new EventEmitter<string>();

  constructor() {
  }

  onSearch(value:string){
    this.searchQuery.emit(value);
  }
}
