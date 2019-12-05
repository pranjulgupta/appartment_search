import { TestBed } from '@angular/core/testing';

import { GetfeatureService } from './getfeature.service';

describe('GetfeatureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetfeatureService = TestBed.get(GetfeatureService);
    expect(service).toBeTruthy();
  });
});
