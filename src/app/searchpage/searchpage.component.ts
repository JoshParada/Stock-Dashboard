import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.scss']
})
export class SearchpageComponent implements OnInit {

  stock =(this.activeRoute.snapshot.paramMap.get('symbol'));

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activeRoute.queryParams.subscribe(queryParams => {
      // do something with the query params
    });
    this.activeRoute.params.subscribe(routeParams => {
      this.stock = (this.activeRoute.snapshot.paramMap.get('symbol'));
    });

  }

}
