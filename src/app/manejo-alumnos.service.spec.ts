import { TestBed } from '@angular/core/testing';

import { ManejoAlumnosService } from './manejo-alumnos.service';

describe('ManejoAlumnosService', () => {
  let service: ManejoAlumnosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManejoAlumnosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
