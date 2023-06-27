/**
 *Autores:Nancy Obed Martínez Miguel
 *        Salvador Elionaí Antonio Pérez
 *Fecha de creación:19 de junio del 2023
 *Fecha de Modificación:24 de junio 2023        
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradoresComponent } from './administradores.component';

describe('AdministradoresComponent', () => {
  let component: AdministradoresComponent;
  let fixture: ComponentFixture<AdministradoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministradoresComponent]
    });
    fixture = TestBed.createComponent(AdministradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
