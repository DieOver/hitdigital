import { TestBed } from '@angular/core/testing';

import { HitService } from './hit.service';
import { provideHttpClient } from '@angular/common/http';

describe('HitService', () => {
  let service: HitService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        provideHttpClient()
      ]
    });
    service = TestBed.inject(HitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
