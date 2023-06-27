/**
 *Autores:Gonzalez Cruz Getzemani Alejandro 
 *        Jesús Fernando Hernández Vite 
 *Fecha de creación:15 de junio del 2023
 *Fecha de Modificación:24 de junio 2023 
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosComponent } from './alumnos.component';

describe('AlumnosComponent', () => {
  let component: AlumnosComponent;
  let fixture: ComponentFixture<AlumnosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumnosComponent]
    });
    fixture = TestBed.createComponent(AlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
