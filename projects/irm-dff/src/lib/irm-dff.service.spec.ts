import { TestBed } from '@angular/core/testing';

import { IrmDffService } from './irm-dff.service';

describe('IrmDffService', () => {
  let service: IrmDffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IrmDffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
