import { Component, OnInit } from '@angular/core';
import { Stock } from '../stockType';
import { PortfolioDB } from '../portfolioDB';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  stockList: Stock[] = []
  constructor(private portfolioDB:PortfolioDB) { }

  ngOnInit(): void {
    this.stockList = this.portfolioDB.getPortfolio();
  }

  removeFromPortfolio(stock:Stock){
    this.portfolioDB.removeFromPortfolio(stock);
  }

}
