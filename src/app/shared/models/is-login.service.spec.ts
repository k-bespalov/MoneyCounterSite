import { TestBed, inject } from '@angular/core/testing';

import { IsLoginService } from './is-login.service';

describe('IsLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsLoginService]
    });
  });

  it('should ...', inject([IsLoginService], (service: IsLoginService) => {
    expect(service).toBeTruthy();
  }));
});
