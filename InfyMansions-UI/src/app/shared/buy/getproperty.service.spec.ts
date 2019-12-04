import { TestBed } from '@angular/core/testing';

import { GetpropertyService } from './getproperty.service';

describe('GetpropertyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetpropertyService = TestBed.get(GetpropertyService);
    expect(service).toBeTruthy();
  });
});
