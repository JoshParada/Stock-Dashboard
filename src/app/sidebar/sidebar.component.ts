import { Component, OnInit, ViewChild } from '@angular/core';
import { Stock } from '../stockType';
import { PortfolioDB } from '../portfolioDB';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  stockList: Stock[] = []
  constructor(private portfolioDB:PortfolioDB) { }

  ngOnInit(): void {
    this.stockList = this.portfolioDB.getPortfolio();
  }

  removeFromPortfolio(stock:Stock){
    this.portfolioDB.removeFromPortfolio(stock);
  }

}
