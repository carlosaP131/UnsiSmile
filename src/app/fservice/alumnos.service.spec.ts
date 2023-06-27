/**
 *Autores:Gonzalez Cruz Getzemani Alejandro 
 *        Jesús Fernando Hernández Vite  
 *Fecha de creación:15 de junio del 2023
 *Fecha de Modificación:24 de junio 2023 
 *Descripcion: css de vista alumnos
 */
import { TestBed } from '@angular/core/testing';

import { AlumnosService } from './alumnos.service';

describe('AlumnosService', () => {
  let service: AlumnosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumnosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
