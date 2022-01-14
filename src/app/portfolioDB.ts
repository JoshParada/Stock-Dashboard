import { Injectable } from '@angular/core';
import { Stock } from "./stockType"

@Injectable({
    providedIn: 'root' // just before your class
})

export class PortfolioDB {
    portfolioList: Stock[] = [
        { symbol: 'tsla' }
    ]

    searchList: string[] = []

    stockHistoryDay: any[] = []
    stockHistoryOpen: any[] = []
    stockHistoryClose: any[] = []
    stockHistoryHigh: any[] = []
    stockHistoryLow: any[] = []

    getPortfolio() {
        //console.log(this.portfolioList)
        return this.portfolioList
    }

    addToPortfolio(stock: Stock) {
        this.portfolioList.push(stock)
        //console.log(this.portfolioList)
    }

    removeFromPortfolio(stock: Stock) {
        let index = this.portfolioList.findIndex(x => x.symbol === stock.symbol);
        //console.log(stock, index)
        if (index > -1) {
            this.portfolioList.splice(index, 1);
        }
        //console.log(this.portfolioList)
    }

    getsearchList() {
        //console.log(this.portfolioList)
        return this.searchList
    }

    addToseachList(stock: string) {
        this.searchList.push(stock)
        //console.log(this.searchList)
    }

    removeFromsearchList() {
        this.searchList.pop()
        //console.log(this.searchList)
    }

    getstockHistoryDay() {
        //console.log(this.portfolioList)
        return this.stockHistoryDay
    }

    addTostockHistoryDay(stock: string) {
        this.stockHistoryDay.push(stock)
        //console.log(this.searchList)
    }

    removeFromstockHistoryDay() {
        for(let i = 0;i<this.getstockHistoryDay.length;i++){
            this.stockHistoryDay.pop()
        }
        //console.log(this.searchList)
    }

    getstockHistoryOpen() {
        //console.log(this.portfolioList)
        return this.stockHistoryOpen
    }

    addTostockHistoryOpen(stock: string) {
        this.stockHistoryOpen.push(stock)
        //console.log(this.searchList)
    }

    removeFromstockHistoryOpen() {
        for(let i = 0;i<this.getstockHistoryOpen.length;i++){
            this.stockHistoryOpen.pop()
        }
        //console.log(this.searchList)
    }

    getstockHistoryClose() {
        //console.log(this.portfolioList)
        return this.stockHistoryClose
    }

    addTostockHistoryClose(stock: string) {
        this.stockHistoryClose.push(stock)
        //console.log(this.searchList)
    }

    removeFromstockHistoryClose() {
        for(let i = 0;i<this.getstockHistoryClose.length;i++){
            this.stockHistoryClose.pop()
        }
        //console.log(this.searchList)
    }

    getstockHistoryHigh() {
        //console.log(this.portfolioList)
        return this.stockHistoryHigh
    }

    addTostockHistoryHigh(stock: string) {
        this.stockHistoryHigh.push(stock)
        //console.log(this.searchList)
    }

    removeFromstockHistoryHigh() {
        for(let i = 0;i<this.getstockHistoryHigh.length;i++){
            this.stockHistoryHigh.pop()
        }
        //console.log(this.searchList)
    }

    getstockHistoryLow() {
        //console.log(this.portfolioList)
        return this.stockHistoryLow
    }

    addTostockHistoryLow(stock: string) {
        this.stockHistoryLow.push(stock)
        //console.log(this.searchList)
    }

    removeFromstockHistoryLow() {
        for(let i = 0;i<this.getstockHistoryLow.length;i++){
            this.stockHistoryLow.pop()
        }        //console.log(this.searchList)
    }
}