import { Component, OnInit } from '@angular/core';
import { Administradores } from 'src/app/clases/adminstradores';
import { AdministradoresService } from 'src/app/fservice/administradores.service';


@Component({
  selector: 'app-administradores',
  templateUrl: './administradores.component.html',
  styleUrls: ['./administradores.component.css']
})
export class AdministradoresComponent implements OnInit{
  listarTodosAdministradores: Administradores[] = []
  administrador = new Administradores();

  constructor(private service: AdministradoresService){}

  ngOnInit(): void {
    this.getAdministradores();
  }

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
  delete(id_admin: Number){
    console.log('eliminando...-------------------->>>')
    this.service.deleteAdministrador(id_admin)
      .subscribe(() => {
        this.getAdministradores();
      });
  }

  /*Método para crear*/
  create(administrador: object) {
    console.log('creando...-------------------->>>');
    this.service.createAdministrador(administrador)
      .subscribe(() => {
        this.getAdministradores();
      });
  }
  

}

function ngOnInit() {
  throw new Error('Function not implemented.');
}
