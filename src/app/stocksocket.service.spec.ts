import { TestBed } from '@angular/core/testing';

import { StocksocketService } from './stocksocket.service';

describe('StocksocketService', () => {
  let service: StocksocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StocksocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
