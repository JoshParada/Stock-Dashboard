import { Component, OnInit } from '@angular/core';
import { Stock } from '../stockType';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  stockList: Stock[] = [
    { symbol: 'aapl' },
    { symbol: 'tsla' },
    { symbol: 'msft' },
    { symbol: 'nbr' }
  ]

  viewStockList(){
    return this.stockList
  }

}
