import { Injectable } from '@angular/core';
import { Stock } from "./stockType"

@Injectable({
    providedIn: 'root' // just before your class
})

export class PortfolioDB {
    portfolioList: Stock[] = [
        
    ]

    searchList: string[] = []

    getPortfolio() {
        //console.log(this.portfolioList)
        return this.portfolioList
    }

    addToPortfolio(stock: Stock) {
        this.portfolioList.push(stock)
        console.log(this.portfolioList)
    }

    removeFromPortfolio(stock: Stock) {
        let index = this.portfolioList.findIndex(x => x.symbol === stock.symbol);
        console.log(stock, index)
        if (index > -1) {
            this.portfolioList.splice(index, 1);
        }
        console.log(this.portfolioList)
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
}