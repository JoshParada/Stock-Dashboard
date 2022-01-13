import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { StockdataService } from './stockdata.service';

describe('StockdataService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let stockService: StockdataService;
  let testSymbol:string='aapl';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    stockService = TestBed.inject(StockdataService);
  });

  it('should be created', () => {
    expect(stockService).toBeTruthy();
  });

  
});
