import { TestBed } from '@angular/core/testing';

import { DataaccessService } from './dataaccess.service';

describe('DataaccessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataaccessService = TestBed.get(DataaccessService);
    expect(service).toBeTruthy();
  });
});
