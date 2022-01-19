import { Component, OnInit, Input } from '@angular/core';
import { StockdataService } from '../stockdata.service';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  //@Input() trendingNamesString: string = ''
  @Input() stockName: string | null= ''

  newsResults: any[] = []
  constructor(private StockdataService: StockdataService) { }

  ngOnInit(): void {
    // console.log('trending', this.stockName)

  }

  ngOnChanges(){
    this.StockdataService.searchNews(this.stockName!).then((resp:any) => {
      //console.log(resp)
      this.newsResults = resp.data;
      //console.log(this.newsResults)
    })
  }

}
