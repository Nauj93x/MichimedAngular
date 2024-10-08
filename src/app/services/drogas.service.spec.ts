import { TestBed } from '@angular/core/testing';
import { DrogaService } from './drogas.service';

describe('DrogaService', () => {
  let service: DrogaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrogaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
