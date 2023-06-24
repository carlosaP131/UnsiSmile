import { Component, OnInit } from '@angular/core';
import { Alumnos } from 'src/app/clases/alumnos';
import { AlumnosService } from 'src/app/fservice/alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  listaALumnos: Alumnos[] = []
  alumnos = new Alumnos()
  listaSexos: string[] = ["M", "F"]
  listaSemestres: String[] = ["113", "213", "313"]
  listaGrupos: String[] = ["A", "B", "C"]


  constructor(private service: AlumnosService) { }

  ngOnInit(): void {
    this.getAllAlumno();
  }

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

  delete(id_alumnoAux: Number) {
    this.service.deleteAlumno(id_alumnoAux)
      .subscribe(() => {
        this.getAllAlumno()

      });
  }

  create(): void {
    this.service.createAlumno(this.alumnos).subscribe({
      next: (res) => {
        this.getAllAlumno()

      },
      error: (e) => console.error(e)

    });
  }

  updateAlumno(alumnos:Alumnos): void{
     this.alumnos = alumnos

     console.log(this.alumnos)
    
  }

  update2():void{
    this.service.updateAlumno(this.alumnos.idAlumno, this.alumnos).subscribe({
      next: (res) => {
        this.getAllAlumno()

      },
      error: (e) => console.error(e)

    });
  }






}





