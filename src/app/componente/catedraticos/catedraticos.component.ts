/**
 * Autores: Carlos Aurelio Alcantara Perez, Baldomero Sainos Hernandez
 * Fecha de creacion: 15/06/23
 * Fecha de modificacion: 15/06/23
 * Comentarios: Modulos de catedratico en esta clase probaremos el service
 */
import { Component, OnInit } from '@angular/core';
import { Catedratico } from 'src/app/clases/catedraticos';
import { CatedraticoService } from 'src/app/fservice/catedraticos.service';

@Component({
  selector: 'app-catedraticos',
  templateUrl: './catedraticos.component.html',
  styleUrls: ['./catedraticos.component.css']
})
export class CatedraticosComponent implements OnInit{
  //Crear la lista para almacenar los datos del catedratico
  listaCatedratico: Catedratico[] = []
  catedratico = new Catedratico();
  constructor(private service:CatedraticoService){
  }

  ngOnInit(): void {
    console.log('ingresnado')
      this.getCatedraticos();
  }

  getCatedraticos(): void {
    console.log('ingresnado==============>>>>>>>>>>><')
    this.service.getCatedraticos()
    .subscribe(
      data =>{
       this.listaCatedratico = data
       console.log(this.listaCatedratico)
      },
      error =>{
        console.log(error)
      }
    )
  }

  deleteCatedraticos(id_Catedratico: Number){
    
    this.service.deleteCatedraticos(id_Catedratico)
    .subscribe(() => {
      this.getCatedraticos();
    });
    console.log('Registro eliminado')
   
  }
  crearCatedratico(): void{
   // this.crearCatedratico(this.catedratico)
  }
}

