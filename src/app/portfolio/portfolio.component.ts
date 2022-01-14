import { Component, OnInit } from '@angular/core';
import { StockdataService } from '../stockdata.service';
import { Stock } from '../stockType';
import { PortfolioDB } from '../portfolioDB';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  portfolio: Stock[] = []
  symbolList:any[] = []
  stockList: any[] = []
  constructor(
    private StockdataService: StockdataService,
    private portfolioDB:PortfolioDB) { }

  ngOnInit(): void {
    this.portfolio = this.portfolioDB.getPortfolio();
    this.portfolio.forEach(stock => {this.symbolList.push(stock.symbol)})

    this.StockdataService.searchQuote(this.symbolList.toString()).then((resp:any) => {
      //console.log(resp)
      this.stockList = resp.data;
      console.log(this.stockList)
    })
  }

  removeFromPortfolio(stock:Stock){
    this.portfolioDB.removeFromPortfolio(stock);
  }

}
