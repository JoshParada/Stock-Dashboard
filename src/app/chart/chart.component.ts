import { Component, OnInit, Input } from '@angular/core';
import { StocksocketService } from '../stocksocket.service';
import { PortfolioDB } from '../portfolioDB';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input() historicalData: any = [];
  //@Input() liveData: any = [];

  openArr: number[] = []
  highArr: number[] = []
  lowArr: number[] = []
  closeArr: number[] = []
  dateArr: string[] = []

  graph: any = {
    data: [],
    layout: {
      autosize: true,
      plot_bgcolor: 'rgba(0,0,0,0)',
      paper_bgcolor: 'rgba(0,0,0,0)',
      candlestickmode: 'group',
      dragmode: 'zoom',
      showlegend: true,
      showgrid: false,
      legend: {
        orientation: 'h',
        y: 10,
        font: { color: '#b0a4dc' }
      },
      xaxis: {
        type: {
          enumerated: 'multicategory'
        },
        tickangle: -45,
        showgrid: false,
        autorange: true,
        zeroline: false,
        title: 'Date',
        color: '#b0a4dc',
        rangeslider: {
          visible: false,
          x: 0,
          y: 1.2,
          xanchor: 'left',
          font: { size: 8 },
        }
      },
      yaxis: {
        title: '$USD',
        color: '#b0a4dc',
        autorange: true,
        zeroline: false
      }
    },
    config: {
      responsive: true,
      displayModeBar: false
    }
  }

  constructor(
    private StocksocketService: StocksocketService,
    private PorfolioDB: PortfolioDB) { }

  ngOnInit(): void {
  
  }

  ngOnChanges(): void {

    let openA = []
    let closeA = []
    let highA = []
    let lowA = []
    let dateA = []

    for (let day of this.historicalData) {
      openA.push(day.open)
      closeA.push(day.close)
      highA.push(day.high)
      lowA.push(day.low)
      dateA.push((day.day).slice(0, 10))
    }

    this.openArr = openA
    this.closeArr = closeA
    this.highArr = highA
    this.lowArr = lowA
    this.dateArr = dateA

    //console.log(this.openArr, this.closeArr, this.lowArr, this.highArr, this.dateArr);

    this.graph.data = [{
      x: this.dateArr,
      high: this.highArr,
      low: this.lowArr,
      open: this.openArr,
      close: this.closeArr,
      increasing: { line: { color: `green, 1)` } },
      decreasing: {
        line: {
          color: `red, 1)`,
        },
        fillcolor: `blue, .1)`
      },
      line: { color: 'blue' },
      type: 'candlestick',
      xaxis: 'x',
      yaxis: 'y'
    }]














    //    *** LIVE DATA ***


    // ngOnInit(): void {
    //   // this.PorfolioDB.removeFromstockHistoryDay()
    //   // this.PorfolioDB.removeFromstockHistoryOpen()
    //   // this.PorfolioDB.removeFromstockHistoryClose()
    //   // this.PorfolioDB.removeFromstockHistoryHigh()
    //   // this.PorfolioDB.removeFromstockHistoryLow()
    // }
    //console.log(this.liveData)

    // let openA = []
    // let closeA = []
    // let highA = []
    // let lowA = []
    // let dateA = []

    // // openA.push(this.liveData[0].open)
    // // closeA.push(this.liveData[0].close)
    // // highA.push(this.liveData[0].high)
    // // lowA.push(this.liveData[0].low)
    // // dateA.push((this.liveData[0].day))

    // for (let day of this.liveData) {
    //   openA.push(day.open)
    //   closeA.push(day.close)
    //   highA.push(day.high)
    //   lowA.push(day.low)
    //   dateA.push((day.day))

    //   this.PorfolioDB.addTostockHistoryDay(day.day)
    //   this.PorfolioDB.addTostockHistoryOpen(day.open)
    //   this.PorfolioDB.addTostockHistoryClose(day.close)
    //   this.PorfolioDB.addTostockHistoryHigh(day.high)
    //   this.PorfolioDB.addTostockHistoryLow(day.low)

    // }
    // // console.log(this.PorfolioDB.getstockHistoryDay())
    // // console.log(this.PorfolioDB.getstockHistoryOpen())
    // // console.log(this.PorfolioDB.getstockHistoryClose())
    // // console.log(this.PorfolioDB.getstockHistoryHigh())
    // // console.log(this.PorfolioDB.getstockHistoryLow())


    // this.openArr = openA
    // this.closeArr = closeA
    // this.highArr = highA
    // this.lowArr = lowA
    // this.dateArr = dateA
    // const random1 = Math.floor(Math.random() * 255);
    // const random2 = Math.floor(Math.random() * 255);
    // const random3 = Math.floor(Math.random() * 255);

    // //console.log(this.openArr, this.closeArr, this.lowArr, this.highArr, this.dateArr);

    // this.graph.data = [{
    //   x: this.PorfolioDB.getstockHistoryDay(),
    //   high: this.PorfolioDB.getstockHistoryHigh(),
    //   low: this.PorfolioDB.getstockHistoryLow(),
    //   open: this.PorfolioDB.getstockHistoryOpen(),
    //   close: this.PorfolioDB.getstockHistoryClose(),

    //   // x: this.dateArr,
    //   // high: this.highArr,
    //   // low: this.lowArr,
    //   // open: this.openArr,
    //   // close: this.closeArr,

    //   increasing: { line: { color: `rgba(${random1}, ${random2}, ${random3}, 1)` } },
    //   decreasing: {
    //     line: {
    //       color: `rgba(${random1}, ${random2}, ${random3}, 1)`,
    //     },
    //     fillcolor: `rgba(${random1}, ${random2}, ${random3}, .1)`
    //   },
    //   line: { color: 'blue' },
    //   type: 'candlestick',
    //   xaxis: 'x',
    //   yaxis: 'y'
    // }]


  }
}
