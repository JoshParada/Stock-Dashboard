import { Component, OnInit, OnDestroy } from '@angular/core';
import { StocksocketService } from '../stocksocket.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'stockpage',
  templateUrl: './stockpage.component.html',
  styleUrls: ['./stockpage.component.scss']
})
export class StockpageComponent implements OnInit, OnDestroy {

  stock = (this.activeRoute.snapshot.paramMap.get('symbol'));

  listResults: any[] = []

  historicalResults: any[] = []
  historicalData: any[] = []

  liveResults: any[] = []
  liveData: any[] = []

  constructor(
    private StocksocketService: StocksocketService,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(queryParams => {
      // do something with the query params
    });
    this.activeRoute.params.subscribe(routeParams => {
      this.stock = (this.activeRoute.snapshot.paramMap.get('symbol'));
    });
    //console.log(this.stock)

    this.StocksocketService.getStockList().subscribe(data => {
      this.listResults = [data];
      //console.log(this.listResults);
    })

    this.StocksocketService.getStockLive().subscribe(data => {
      this.liveResults = [data[0]];
      this.liveData = this.liveResults[0].data;
      //console.log(this.liveData);
    })

    this.StocksocketService.getStockHistory().subscribe(data => {
      this.historicalResults = [data[0]];
      this.historicalData = this.historicalResults[0].days;
      //console.log(this.historicalData);
    })
  }

  ngOnDestroy() {

  }
}
