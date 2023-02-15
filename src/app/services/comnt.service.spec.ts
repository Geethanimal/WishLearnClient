import { TestBed } from '@angular/core/testing';

import { ComntService } from './comnt.service';

describe('ComntService', () => {
  let service: ComntService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComntService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
