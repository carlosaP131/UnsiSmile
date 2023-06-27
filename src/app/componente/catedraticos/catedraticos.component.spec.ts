/**
 * Autores: Carlos Aurelio Alcantara Perez
 *          Baldomero Sainos Hernandez
 * Fecha de creacion: 15/06/23
 * Fecha de modificacion: 15/06/23
 * Comentarios: Modulos de catedratico en esta clase probaremos el service
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatedraticosComponent } from './catedraticos.component';

describe('CatedraticosComponent', () => {
  let component: CatedraticosComponent;
  let fixture: ComponentFixture<CatedraticosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatedraticosComponent]
    });
    fixture = TestBed.createComponent(CatedraticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
