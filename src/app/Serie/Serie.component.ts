import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { dataSeries } from './dataSeries';

@Component({
  selector: 'app-Serie',
  templateUrl: './Serie.component.html',
  styleUrls: ['./Serie.component.css']
})
export class SerieComponent implements OnInit {

  series: Array<Serie> = [];

  constructor() { }
  getSeriesList(): Array<Serie> {
    return dataSeries
  }

  ngOnInit() {
    this.series = this.getSeriesList();
  }

}
