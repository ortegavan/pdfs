import { TestBed } from '@angular/core/testing';

import { JsonplaceholderService } from './jsonplaceholder.service';

describe('JsonplaceholderService', () => {
  let service: JsonplaceholderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonplaceholderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
