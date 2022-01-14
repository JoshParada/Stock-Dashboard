import { Component, OnInit,Input } from '@angular/core';
import { StockdataService } from '../stockdata.service';


@Component({
  selector: 'infopane',
  templateUrl: './infopane.component.html',
  styleUrls: ['./infopane.component.scss']
})
export class InfopaneComponent implements OnInit {

  @Input() stockName: string | null= ''

  stockData: any[]= []

  constructor(private StockdataService: StockdataService) { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.StockdataService.searchProfile(this.stockName!).then((resp:any) => {
      //console.log(resp)
      this.stockData = resp.data;
      //console.log(this.stockData)
    })
  }

}
