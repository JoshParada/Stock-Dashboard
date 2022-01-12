import { Component, OnInit } from '@angular/core';
import { Stock } from '../stockType';
import { StockdataService } from '../stockdata.service';
import { PortfolioDB } from '../portfolioDB';

@Component({
  selector: 'searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.scss']
})
export class SearchpageComponent implements OnInit {

  symbolSearch:string[] = []
  searchResults = []
  symbolList = []
  searchData = []

  stockList: Stock[] = [
    {symbol:'nnbr'}
  ]
  constructor(
    private StockdataService: StockdataService,
    private portfolioDB:PortfolioDB) { }

  ngOnInit(): void {
    this.symbolSearch = this.portfolioDB.getsearchList()
    //console.log(this.symbolSearch)

    this.StockdataService.searchStock(this.symbolSearch[this.symbolSearch.length-1]).then((resp:any) => {
      //console.log(resp);
      this.searchResults = resp.data;
      this.searchResults.forEach(stock => {this.symbolList.push(stock['symbol'])})
      //console.log(this.searchResults,this.symbolList)

      this.StockdataService.searchQuote(this.symbolList.toString()).then((resp:any) => {
        //console.log(resp)
        this.searchData = resp.data;
        console.log(this.searchData)
      })
    })
  }

  addToPortfolio(stock:Stock){
    this.portfolioDB.addToPortfolio(stock);
  }

}
