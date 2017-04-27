import { TestBed, inject } from '@angular/core/testing';

import { FindFriendsService } from './find-friends.service';

describe('FindFriendsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FindFriendsService]
    });
  });

  it('should ...', inject([FindFriendsService], (service: FindFriendsService) => {
    expect(service).toBeTruthy();
  }));
});
