import { Injectable } from '@angular/core';
import { io } from "socket.io-client";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StocksocketService {

  constructor() { }

  public stockList$: BehaviorSubject<string> = new BehaviorSubject('');
  public stockHistory$: BehaviorSubject<string> = new BehaviorSubject('');
  public stockLive$: BehaviorSubject<string> = new BehaviorSubject('');

  //socket = io('https://stock-socket-test.herokuapp.com/');
  socket = io('http://localhost:3500');

  public getStockList(){
    this.socket.on('list', data =>{
      //console.log(data);
      this.stockList$.next(data);
    })
    return this.stockList$.asObservable();
  }

  public getStockHistory(){
    this.socket.on('history', data =>{
      //console.log(data);
      this.stockHistory$.next(data);
    })
    return this.stockHistory$.asObservable();
  }

  public getStockLive(){
    this.socket.on('live', data =>{
      //console.log(data);
      this.stockLive$.next(data);
    })
    return this.stockLive$.asObservable();
  }
}
