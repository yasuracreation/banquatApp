import { TestBed } from '@angular/core/testing';

import { MasterstorageService } from './masterstorage.service';

describe('MasterstorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MasterstorageService = TestBed.get(MasterstorageService);
    expect(service).toBeTruthy();
  });
});
