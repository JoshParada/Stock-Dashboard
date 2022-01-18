import { Injectable } from '@angular/core';
import { io } from "socket.io-client";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StocksocketService {

  constructor() { }

  public stock$: BehaviorSubject<string> = new BehaviorSubject('');
  
  socket = io('https://stock-socket-test.herokuapp.com/');
  // socket = io('http://localhost:3500');

  public listen(type:string) {
    this.socket.on(type, data => {
      //console.log(data);
      this.stock$.next(data);
    })
    return this.stock$.asObservable();
  }

  public emit(type:string,data:any) {
    this.socket.emit(type,data)
  }
}
