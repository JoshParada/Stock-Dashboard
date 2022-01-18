import { Component, OnInit, OnDestroy } from '@angular/core';
import { StocksocketService } from '../stocksocket.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'stockpage',
  templateUrl: './stockpage.component.html',
  styleUrls: ['./stockpage.component.scss']
})
export class StockpageComponent implements OnInit, OnDestroy {

  stockSymbols = ['ABC','XYZ','123','456','789','NBR']
  randomNum = Math.floor(Math.random()*5)

  stockName = (this.activeRoute.snapshot.paramMap.get('symbol'));

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

    this.activeRoute.params.subscribe(routeParams => {
      this.stockName = (this.activeRoute.snapshot.paramMap.get('symbol'));
    });
    //console.log(this.stock)

    this.StocksocketService.listen('list').subscribe(data => {
      this.listResults = [data];
      //console.log(this.listResults);
    })

    this.StocksocketService.listen('live').subscribe(data => {
      this.liveResults = [data[0]];
      this.liveData = this.liveResults[0].data;
      //console.log(this.liveData);
    })

    let lastweek = new Date();
    lastweek.setDate(lastweek.getDate() - 6)
    let today = new Date();
    this.StocksocketService.emit('history', {names: [this.stockSymbols[this.randomNum]], startDate: lastweek, endDate:today,interval:'1d'})

    this.StocksocketService.listen('history').subscribe(data => {
      this.historicalResults = [data[0]];
      this.historicalData = this.historicalResults[0].days;
      //console.log(this.historicalData);
    })
  }

  onSubmit(isValid: boolean | null) {
    console.log(this.startDate, this.endDate, this.interval)
    this.StocksocketService.emit('history', {names: ['ABC'], startDate: this.startDate, endDate:this.endDate,interval:this.interval})
    this.StocksocketService.listen('history').subscribe(data => {
      this.historicalResults = [data[0]];
      this.historicalData = this.historicalResults[0].days;
      //console.log(this.historicalData);
    })
  }

  ngOnDestroy() {

  }
}
