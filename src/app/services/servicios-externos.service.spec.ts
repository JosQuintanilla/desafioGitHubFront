import { TestBed } from '@angular/core/testing';

import { ServiciosExternosService } from './servicios-externos.service';

describe('ServiciosExternosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiciosExternosService = TestBed.get(ServiciosExternosService);
    expect(service).toBeTruthy();
  });
});
