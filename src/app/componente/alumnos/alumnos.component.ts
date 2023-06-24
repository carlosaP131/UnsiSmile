/**
 *Autores:Gonzalez Cruz Getzemani Alejandro 
 *        Jesus Hernandez Vite 
 *Fecha de creación:15 de junio del 2023
 *Fecha de Modificación:24 de junio 2023 
 *Descripcion: css de vista alumnos
 */

// Importaciones necesarias
import { Component, OnInit } from '@angular/core';
import { Alumnos } from 'src/app/clases/alumnos';
import { AlumnosService } from 'src/app/fservice/alumnos.service';

// Decorador del componente
@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})

export class AlumnosComponent implements OnInit {
  // Declaración de variables
  listaALumnos: Alumnos[] = [] // Lista de alumnos
  alumnos = new Alumnos() // Objeto para almacenar los datos de un alumno nuevo
  listaSexos: string[] = ["M", "F"] // Lista de opciones para el campo "sexo"
  listaSemestres: String[] = ["113", "213", "313"] // Lista de opciones para el campo "semestre"
  listaGrupos: String[] = ["A", "B", "C"] // Lista de opciones para el campo "grupo" 

  // Constructor del componente
  constructor(private service: AlumnosService) { }

  // Método que se ejecuta al inicializar el componente
  ngOnInit(): void {
    this.getAllAlumno();
  }
  // Método para obtener todos los alumnos
  getAllAlumno(): void {
    this.service.getAllAlumno()
      .subscribe(
        data => {
          this.listaALumnos = data
          console.log(this.listaALumnos)
        },
        error => {
          console.log(error)
        }
      )
  }
  // Método para eliminar un alumno  
  delete(id_alumnoAux: Number) {
    this.service.deleteAlumno(id_alumnoAux)
      .subscribe(() => {
        this.getAllAlumno()

      });
  }
  // Método para crear un alumno
  create(): void {
    this.service.createAlumno(this.alumnos).subscribe({
      next: (res) => {
        this.getAllAlumno()

      },
      error: (e) => console.error(e)

    });
  }
  // Método para actualizar un alumno (preparación)
  updateAlumno(alumnos: Alumnos): void {
    this.alumnos = alumnos

    console.log(this.alumnos)

  }
  // Método para actualizar un alumno (confirmación)
  update2(): void {
    this.service.updateAlumno(this.alumnos.idAlumno, this.alumnos).subscribe({
      next: (res) => {
        this.getAllAlumno()

      },
      error: (e) => console.error(e)

    });
  }
}





