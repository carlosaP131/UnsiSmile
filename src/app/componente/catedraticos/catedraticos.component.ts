/**
 * Autores: Carlos Aurelio Alcantara Perez
 *          Baldomero Sainos Hernandez
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
  listaSexos:string[]=["H","M"];
  constructor(private service:CatedraticoService){
  }

  ngOnInit(): void {
    console.log('ingresnado')
      this.getCatedraticos();
  }

  getCatedraticos(): void {
      //obtiene un catedratico y lo muestra en la lista que creamos 
    this.service.getCatedraticos()
    .subscribe(
      data =>{
       this.listaCatedratico = data
       console.log(this.listaCatedratico)
       console.log(this.listaCatedratico[0].idCatedratico)
      },
      error =>{
        console.log(error)
      }
    )
  }

  deleteCatedraticos(id_Catedratico: Number){
    //Se toma el catedratico y por su id hacemos un borrado logico 
    
    this.service.deleteCatedraticos(id_Catedratico)
    .subscribe(() => {
      this.getCatedraticos();
    });
    console.log('Registro eliminado')
   
  }
  upateCatedraticos(catedratico:Catedratico):void{
    //Obtiene los datos de catedratico para mostrarlos en el form
    this.catedratico = catedratico
      
    
  }
  upate2Catedraticos():void{
    //Aqui se toman lo que trajo el metodo updateCatedraticos para actualizarlo
    this.service.upateCatedraticosId(this.catedratico.idCatedratico, this.catedratico).subscribe({
      next: (res) => {  
        //Ya actualizado se carga la lista para que se muestre el Catedratico Actualizado
        this.getCatedraticos();      
    
    
    },
    error: (e) => console.error(e)
 
    });
    
  }
  crearCatedratico(): void{
   // Creacion de un catedratico tomando los parametros del form 
   this.service.createCatedraticos(this.catedratico).subscribe({
    next: (res) => {    
      //Actualizamo la tabla
        this.getCatedraticos();    
    
    },
    error: (e) => console.error(e)
  });
}
}

