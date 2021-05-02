import { TestBed } from '@angular/core/testing';

import { MovimientoAlumnosService } from './movimiento-alumnos.service';

describe('MovimientoAlumnosService', () => {
  let service: MovimientoAlumnosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovimientoAlumnosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
