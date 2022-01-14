import { Component, OnInit, Input } from '@angular/core';
import { StockdataService } from '../stockdata.service';
import { Stock } from '../stockType';
import { PortfolioDB } from '../portfolioDB';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() stockName: string | null= ''
  constructor(
    private StockdataService: StockdataService,
    private portfolioDB: PortfolioDB) { }

  stockData: any[]= []

  ngOnInit(): void {

  }

  ngOnChanges(){
    this.StockdataService.searchQuote(this.stockName!).then((resp:any) => {
      //console.log(resp)
      this.stockData = resp.data;
      //console.log(this.stockData,this.stockData[0].name)
    })
  }

  removeFromPortfolio(stock:Stock){
    this.portfolioDB.removeFromPortfolio(stock);
  }

}
