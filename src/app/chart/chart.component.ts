import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { StocksocketService } from '../stocksocket.service';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input() historicalData: any = [];
  stockList: any[] = []

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

  graph: any = {
    data: [],
    layout: {
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

  constructor(private StocksocketService: StocksocketService) { }

  ngOnInit(): void {

  }

  onSubmit(isValid: boolean | null) {
    console.log(this.startDate, this.endDate, this.interval)
  }

  ngOnChanges(): void {
    //console.log(this.historicalData)
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
