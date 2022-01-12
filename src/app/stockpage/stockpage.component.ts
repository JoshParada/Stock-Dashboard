import { Component, OnInit, OnDestroy } from '@angular/core';
import { StocksocketService } from '../stocksocket.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'stockpage',
  templateUrl: './stockpage.component.html',
  styleUrls: ['./stockpage.component.scss']
})
export class StockpageComponent implements OnInit, OnDestroy {

  stock =(this.activeRoute.snapshot.paramMap.get('symbol'));

  constructor(
    private StocksocketService: StocksocketService,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.StocksocketService.getStockList().subscribe(data => {
    //   this.stocklist = [data]
    //   console.log(this.stocklist)
    // })

    this.activeRoute.queryParams.subscribe(queryParams => {
      // do something with the query params
    });
    this.activeRoute.params.subscribe(routeParams => {
      this.stock = (this.activeRoute.snapshot.paramMap.get('symbol'));
    });
    console.log(this.stock)
  }

  today: Date = new Date()
  todayString: string = this.today.toISOString().slice(0, 10);


  public graph = {
    data: [
      { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: { color: 'red' } },
      { x: [1, 2, 3], y: [2, 5, 3], type: 'bar' },
    ],
    layout: { width: 320, height: 240, title: 'A Fancy Plot' }
  };

  ngOnDestroy(){

  }
}
