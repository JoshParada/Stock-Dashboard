import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stockpage',
  templateUrl: './stockpage.component.html',
  styleUrls: ['./stockpage.component.scss']
})
export class StockpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  public graph = {
    data: [
        { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: {color: 'red'} },
        { x: [1, 2, 3], y: [2, 5, 3], type: 'bar' },
    ],
    layout: {width: 320, height: 240, title: 'A Fancy Plot'}
};
}
