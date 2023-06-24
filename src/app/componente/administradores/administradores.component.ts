/**
 *Autores:Nancy Obed Martínez Miguel
 *        Salvador Elionaí Antonio Perez
 *Fecha de creación:19 de junio del 2023
 *Fecha de Modificación:24 de junio 2023        
 */
import { Component, OnInit } from '@angular/core';
import { Administradores } from 'src/app/clases/adminstradores';
import { AdministradoresService } from 'src/app/fservice/administradores.service';


@Component({
  selector: 'app-administradores',
  templateUrl: './administradores.component.html',
  styleUrls: ['./administradores.component.css']
})
export class AdministradoresComponent implements OnInit {
  listarTodosAdministradores: Administradores[] = []
  administrador = new Administradores();
  listaSexos: string[] = ["H", "M"];
  /**
     * Constructor del componente AdministradoresComponent.
     * @param service Objeto del servicio AdministradoresService utilizado para realizar operaciones CRUD.
     */

  constructor(private service: AdministradoresService) { }
  /**
     * Método del ciclo de vida del componente que se ejecuta al inicializarlo.
     */
  ngOnInit(): void {
    this.getAdministradores();
  }
  /**
     * Obtiene la lista de administradores.
     */
  getAdministradores(): void {
    console.log('listando')
    this.service.getAdministradores()
      .subscribe(
        data => {
          this.listarTodosAdministradores = data
          console.log(this.listarTodosAdministradores)
        },
        error => {
          console.log(error)
        }
      )
  }
  /**
  * Elimina un administrador.
  * @param id_admin ID del administrador a eliminar.
  */
  delete(id_admin: Number) {
    console.log('eliminando...-------------------->>>')
    this.service.deleteAdministrador(id_admin)
      .subscribe(() => {
        this.getAdministradores();
      });
  }

  /**
    * Crea un nuevo administrador.
    */
  createAdministrador(): void {
    console.log('creando...-------------------->>>');
    this.service.createAdministrador(this.administrador)
      .subscribe(() => {
        this.getAdministradores();
      });
  }

  /**
  * Actualiza un administrador utilizando el formulario actual.
  */
  update2Administrador(): void {
    console.log('update...-------------------->>>');
    this.service.updateAdministrador(this.administrador.idAdministrador, this.administrador)
      .subscribe(() => {
        this.getAdministradores();
      });
  }

  /**
  * Actualiza el administrador actual con los datos de otro administrador.
  * @param administradores Objeto Administradores que contiene los datos del administrador.
  */
  updateAdministrador(administradores: Administradores): void {

    this.administrador = administradores
    console.log(this.administrador)

  }

}

function ngOnInit() {
  throw new Error('Function not implemented.');
}
