import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockdataService {

  constructor(private http:HttpClient) { }

  APIkey:string = 'ntyrU1UrsRc1dEahAwilaMOZ9ISV9icMT9ffaAaR'

  public searchStock(symbol:string){
    return new Promise((resolve,reject)=>{
      this.http.get(`https://api.stockdata.org/v1/entity/search?search=${symbol}&countries=us&api_token=${this.APIkey}`).subscribe(
        (res)=>{
          //console.log(res)
          resolve(res);
        }, (err)=>{
          reject(err);
        }
      )
    })
  }

  public searchProfile(symbol:string){
    return new Promise((resolve,reject)=>{
      this.http.get(`https://api.stockdata.org/v1/entity/profile?symbols=${symbol}&api_token=${this.APIkey}`).subscribe(
        (res)=>{
          //console.log(res)
          resolve(res);
        }, (err)=>{
          reject(err);
        }
      )
    })
  }

  public searchQuote(symbol:string){
    return new Promise((resolve,reject)=>{
      this.http.get(`https://api.stockdata.org/v1/data/quote?symbols=${symbol}&api_token=${this.APIkey}`).subscribe(
        (res)=>{
          //console.log(res)
          resolve(res);
        }, (err)=>{
          reject(err);
        }
      )
    })    
  }

  public searchTrending(date:string){
    return new Promise((resolve,reject)=>{
      this.http.get(`https://api.stockdata.org/v1/news/stats/intraday?&interval=week&published_after=${date}&entity_types=equity&exchanges=nyse&limit=3&language=en&countries=us&api_token=${this.APIkey}`).subscribe(
        (res)=>{
          //console.log(res)
          resolve(res);
        }, (err)=>{
          reject(err);
        }
      )
    })    
  }

  public searchNews(symbol:string){
    return new Promise((resolve,reject)=>{
      this.http.get(`https://api.stockdata.org/v1/news/all?symbols=${symbol}&language=en&countries=us&filter_entities=true&limit=3&api_token=${this.APIkey}`).subscribe(
        (res)=>{
          //console.log(res)
          resolve(res);
        }, (err)=>{
          reject(err);
        }
      )
    })
  }

}
