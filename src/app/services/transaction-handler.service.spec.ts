import { TestBed } from '@angular/core/testing';

import { TransactionHandlerService } from './transaction-handler.service';

describe('TransactionHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransactionHandlerService = TestBed.get(TransactionHandlerService);
    expect(service).toBeTruthy();
  });
});
