import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AlumnosService {
  // Variable para enlazar el back con el front
  private baseUrl1 = 'http://localhost:8080/unsis/';

  //pasar el HttpClient como parametro en el contructor

  constructor(private http:HttpClient) { }

  getAllAlumno(): Observable<any> {
    return this.http.get(`${this.baseUrl1}`+ 'obtenerTodosAlumno');
  }

  createAlumno(alumno: object): Observable<object>{
    return this.http.delete(`${this.baseUrl1}`+ 'crearAlumno', alumno);
  }

  deleteAlumno(id_alumnoAux: Number): Observable<any>{
    return this.http.delete(`${this.baseUrl1}eliminarAlumno/${id_alumnoAux}`, {responseType: 'text'});
  }

  getAlumno(id: number): Observable<Object>{
    return this.http.get(`${this.baseUrl1}/obtenerAlumnos/${id}`);
  }

  updateAlumno(id: number, value: any): Observable<Object>{
    return this.http.post(`${this.baseUrl1}/editarAlumnos/${id}`, value);
  }


  
}
