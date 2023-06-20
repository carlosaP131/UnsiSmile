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

  constructor(private service: AdministradoresService){}

  ngOnInit(): void {
    this.getAdministradores();
  }

  getAdministradores(): void {
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

}

function ngOnInit() {
  throw new Error('Function not implemented.');
}
