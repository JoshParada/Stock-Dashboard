import { Component, OnInit } from '@angular/core';
import { Stock } from '../stockType';
import { StockdataService } from '../stockdata.service';
import { PortfolioDB } from '../portfolioDB';
import { ActivatedRoute } from '@angular/router';


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
  // searchData = [
  //   {ticker: 'aapl', name: 'Apple Inc.', price: 170.54, day_change: .03},
  //   {ticker: 'asdf', name: 'Apple Hospitality REIT Inc', price: 54.88, day_change: 1.03},
  //   {ticker: 'mpl', name: 'Maui Land & Pineapple Company Inc', price: 10.05, day_change: .03}

  // ]

  stock =(this.activeRoute.snapshot.paramMap.get('symbol'));

  constructor(
    private StockdataService: StockdataService,
    private portfolioDB:PortfolioDB,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activeRoute.queryParams.subscribe(queryParams => {
      // do something with the query params
    });
    this.activeRoute.params.subscribe(routeParams => {
      this.stock = (this.activeRoute.snapshot.paramMap.get('symbol'));
    });

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
