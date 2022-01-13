import { Component } from '@angular/core';
import { Stock } from './stockType';
import { PortfolioDB } from './portfolioDB';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StockDashboard';

  symbolSearch:string = ''
  constructor(private portfolioDB:PortfolioDB){}

  addTosearchList(stock:string){
    this.portfolioDB.addToseachList(stock);
    //this.symbolSearch = ''

    //console.log(this.portfolioDB.searchList)
  }
}
