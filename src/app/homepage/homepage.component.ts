import { Component, OnInit } from '@angular/core';
import { StockdataService } from '../stockdata.service';
import { Stock } from '../stockType';
import { PortfolioDB } from '../portfolioDB';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  trendingList = []
  trendingNames = []
  trendingData = []
  trendingNews = []
  today: Date = new Date();

  constructor(
    private StockdataService: StockdataService,
    private portfolioDB:PortfolioDB) { }

  ngOnInit(): void {
    this.today.setDate(this.today.getDate() - 2);
    let todayString = this.today.toISOString().slice(0, 10);

    this.StockdataService.searchTrending(todayString).then((resp:any) => {
      //console.log(resp)
      this.trendingList = resp.data[0].data;
      this.trendingList.forEach(stock => {this.trendingNames.push(stock['key'])})
      //console.log(this.trendingList,this.trendingNames)


      this.StockdataService.searchQuote(this.trendingNames.toString()).then((resp:any) => {
        //console.log(resp)
        this.trendingData = resp.data;
        //console.log(this.trendingData)
      })

      this.StockdataService.searchNews(this.trendingNames.toString()).then((resp:any) => {
        //console.log(resp)
        this.trendingNews = resp.data;
        console.log(this.trendingNews)
      })
    })
  }

  addToPortfolio(stock:Stock){
    this.portfolioDB.addToPortfolio(stock);
  }

}
