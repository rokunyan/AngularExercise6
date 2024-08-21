import { TestBed } from '@angular/core/testing';

import { NgxAnimalRandomsService } from './ngx-animal-randoms.service';

describe('NgxAnimalRandomsService', () => {
  let service: NgxAnimalRandomsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxAnimalRandomsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
