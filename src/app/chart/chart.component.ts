import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { StocksocketService } from '../stocksocket.service';
import { PortfolioDB } from '../portfolioDB';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input() historicalData: any = [];
  @Input() liveData: any = [];

  today: Date = new Date()
  todayString: string = this.today.toISOString().slice(0, 10);
  startDate = ''
  endDate = ''
  interval = ''

  openArr: number[] = []
  highArr: number[] = []
  lowArr: number[] = []
  closeArr: number[] = []
  dateArr: string[] = []

  DBopenArr: number[] = this.PorfolioDB.getstockHistoryOpen()
  DBhighArr: number[] = this.PorfolioDB.getstockHistoryHigh()
  DBlowArr: number[] = this.PorfolioDB.getstockHistoryLow()
  DBcloseArr: number[] = this.PorfolioDB.getstockHistoryClose()
  DBdateArr: string[] = this.PorfolioDB.getstockHistoryDay()

  graph: any = {
    data: [{ x: [1, 2, 3], y: [2, 6, 3], high:[2, 6, 3],low:[2, 6, 3],open:[2, 6, 3],close:[2, 6, 3],type: 'candlestick', marker: {color: 'red'} }],
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
    this.PorfolioDB.removeFromstockHistoryDay()
    this.PorfolioDB.removeFromstockHistoryOpen()
    this.PorfolioDB.removeFromstockHistoryClose()
    this.PorfolioDB.removeFromstockHistoryHigh()
    this.PorfolioDB.removeFromstockHistoryLow()
  }

  onSubmit(isValid: boolean | null) {
    console.log(this.startDate, this.endDate, this.interval)
  }

  ngOnChanges(): void {

    // this.DBopenArr  = this.PorfolioDB.getstockHistoryOpen()
    // this.DBhighArr  = this.PorfolioDB.getstockHistoryHigh()
    // this.DBlowArr= this.PorfolioDB.getstockHistoryLow()
    // this.DBcloseArr = this.PorfolioDB.getstockHistoryClose()
    // this.DBdateArr  = this.PorfolioDB.getstockHistoryDay()
    //console.log(this.historicalData)
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

    // //console.log(this.DBdateArr)

    // this.openArr = openA
    // this.closeArr = closeA
    // this.highArr = highA
    // this.lowArr = lowA
    // this.dateArr = dateA
    // const random1 = Math.floor(Math.random() * 255);
    // const random2 = Math.floor(Math.random() * 255);
    // const random3 = Math.floor(Math.random() * 255);

    // //console.log(this.openArr, this.closeArr, this.lowArr, this.highArr, this.dateArr);

    // this.graph.data[0].x.push(3243);
    // this.graph.data[0].close.push(345);
    // this.graph.data[0].high.push(12345);
    // this.graph.data[0].low.push(314253);
    // this.graph.data[0].open.push(3415);

    // // this.graph.data = [{
    // //   x: this.PorfolioDB.getstockHistoryDay(),
    // //   high: this.PorfolioDB.getstockHistoryHigh(),
    // //   low: this.PorfolioDB.getstockHistoryLow(),
    // //   open: this.PorfolioDB.getstockHistoryOpen(),
    // //   close: this.PorfolioDB.getstockHistoryClose(),

    // //   // x: this.DBdateArr,
    // //   // high: this.DBhighArr,
    // //   // low: this.DBlowArr,
    // //   // open: this.DBopenArr,
    // //   // close: this.DBcloseArr,

    // //   // x: this.dateArr,
    // //   // high: this.highArr,
    // //   // low: this.lowArr,
    // //   // open: this.openArr,
    // //   // close: this.closeArr,

    // //   // increasing: { line: { color: `rgba(${random1}, ${random2}, ${random3}, 1)` } },
    // //   // decreasing: {
    // //   //   line: {
    // //   //     color: `rgba(${random1}, ${random2}, ${random3}, 1)`,
    // //   //   },
    // //   //   fillcolor: `rgba(${random1}, ${random2}, ${random3}, .1)`
    // //   // },
    // //   // line: { color: 'blue' },
    // //   type: 'candlestick'
    // //   // xaxis: 'x',
    // //   // yaxis: 'y'
    // // }]



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
    const random1 = Math.floor(Math.random() * 255);
    const random2 = Math.floor(Math.random() * 255);
    const random3 = Math.floor(Math.random() * 255);

    //console.log(this.openArr, this.closeArr, this.lowArr, this.highArr, this.dateArr);

    this.graph.data = [{
      x: this.dateArr,
      high: this.highArr,
      low: this.lowArr,
      open: this.openArr,
      close: this.closeArr,
      increasing: { line: { color: `rgba(${random1}, ${random2}, ${random3}, 1)` } },
      decreasing: {
        line: {
          color: `rgba(${random1}, ${random2}, ${random3}, 1)`,
        },
        fillcolor: `rgba(${random1}, ${random2}, ${random3}, .1)`
      },
      line: { color: 'blue' },
      type: 'candlestick',
      xaxis: 'x',
      yaxis: 'y'
    }]

  }
}
