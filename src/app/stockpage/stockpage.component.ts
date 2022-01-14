import { Component, OnInit, OnDestroy } from '@angular/core';
import { StocksocketService } from '../stocksocket.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'stockpage',
  templateUrl: './stockpage.component.html',
  styleUrls: ['./stockpage.component.scss']
})
export class StockpageComponent implements OnInit, OnDestroy {

  stockName = (this.activeRoute.snapshot.paramMap.get('symbol'));
  // It would probably be a good idea to make some interfaces to define what the items
  // going into the arrays will look like so you don't have to use 'any' for your type
  listResults: any[] = []

  historicalResults: any[] = []
  historicalData: any[] = []

  liveResults: any[] = []
  liveData: any[] = []


  today: Date = new Date()
  todayString: string = this.today.toISOString().slice(0, 10);
  startDate = ''
  endDate = ''
  interval = ''

  constructor(
    private StocksocketService: StocksocketService,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(queryParams => {
      // do something with the query params
    });
    this.activeRoute.params.subscribe(routeParams => {
      this.stockName = (this.activeRoute.snapshot.paramMap.get('symbol'));
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

  onSubmit(isValid: boolean | null) {
    console.log(this.startDate, this.endDate, this.interval)
  }

  ngOnDestroy() {

  }
}
