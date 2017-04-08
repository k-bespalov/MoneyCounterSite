import { TestBed, inject } from '@angular/core/testing';

import { PartiesAsyncService } from './parties-async.service';

describe('PartiesAsyncService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartiesAsyncService]
    });
  });

  it('should ...', inject([PartiesAsyncService], (service: PartiesAsyncService) => {
    expect(service).toBeTruthy();
  }));
});
