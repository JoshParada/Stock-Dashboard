import { Component, OnInit, Input } from '@angular/core';
import { StockdataService } from '../stockdata.service';
import { PortfolioDB } from '../portfolioDB';
import { Stock } from '../stockType';

@Component({
  selector: 'searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.scss']
})
export class SearchresultsComponent implements OnInit {

  @Input() stock:string | null= ''

  symbolSearch:string[] = []
  searchResults = []
  symbolList = []
  searchData = []
  constructor(
    private StockdataService: StockdataService,
    private portfolioDB:PortfolioDB) { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.symbolList = []
    this.StockdataService.searchStock(this.stock!).then((resp:any) => {
      //console.log(resp);
      this.searchResults = resp.data;
      this.searchResults.forEach(stock => {this.symbolList.push(stock['symbol'])})
      //console.log(this.searchResults,this.symbolList)

      this.StockdataService.searchQuote(this.symbolList.toString()).then((resp:any) => {
        //console.log(resp)
        this.searchData = resp.data;
        //console.log(this.searchData)
      })
    })
  }

  addToPortfolio(stock:Stock){
    this.portfolioDB.addToPortfolio(stock);
  }
}
