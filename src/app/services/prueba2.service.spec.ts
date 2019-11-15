import { TestBed } from '@angular/core/testing';

import { Prueba2Service } from './prueba2.service';

describe('Prueba2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Prueba2Service = TestBed.get(Prueba2Service);
    expect(service).toBeTruthy();
  });
});
