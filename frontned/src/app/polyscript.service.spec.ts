import { TestBed } from '@angular/core/testing';

import { PolyscriptService } from './polyscript.service';

describe('PolyscriptService', () => {
  let service: PolyscriptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolyscriptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
