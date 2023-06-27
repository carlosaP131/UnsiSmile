/**
 *Autores:Nancy Obed Martínez Miguel
 *        Salvador Elionaí Antonio Pérez
 *Fecha de creación:19 de junio del 2023
 *Fecha de Modificación:27 de junio 2023        
 */
import { TestBed } from '@angular/core/testing';

import { AdministradoresService } from './administradores.service';

describe('AdministradoresService', () => {
  let service: AdministradoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdministradoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
