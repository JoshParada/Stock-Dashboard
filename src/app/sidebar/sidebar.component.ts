import { Component, OnInit, ViewChild } from '@angular/core';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { Stock } from '../stockType';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {  }

  // @ViewChild(PortfolioComponent) portfolio!:PortfolioComponent;

  // stockList : Stock[] = this.portfolio.stockList

  stockList: Stock[] = [
    { symbol: 'aapl' },
    { symbol: 'tsla' },
    { symbol: 'msft' },
    { symbol: 'nbr' }
  ]

}
