/**
 *Autores:Gonzalez Cruz Getzemani Alejandro 
 *        Jesus Hernandez Vite 
 *Fecha de creación:15 de junio del 2023
 *Fecha de Modificación:24 de junio 2023 
 *Descripcion: css de vista alumnos
 */

// Importaciones necesarias
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Decorador Injectable para indicar que esta clase es un servicio
@Injectable({
  providedIn: 'root'
})

export class AlumnosService {
  // Variable para enlazar el back con el front
  private baseUrl1 = 'http://localhost:8080/unsis/';

  //pasar el HttpClient como parametro en el contructor
  constructor(private http: HttpClient) { }

  // Método para obtener todos los alumnos
  getAllAlumno(): Observable<any> {
    return this.http.get(`${this.baseUrl1}` + 'obtenerTodosAlumnos');
  }

  // Método para crear un alumno
  createAlumno(alumno: object): Observable<object> {
    return this.http.post(`${this.baseUrl1}` + 'crearAlumno', alumno);
  }

  // Método para eliminar un alumno
  deleteAlumno(id_alumnoAux: Number): Observable<any> {
    return this.http.delete(`${this.baseUrl1}eliminarAlumno/${id_alumnoAux}`, { responseType: 'text' });
  }

  // Método para obtener un alumno por su ID
  getAlumno(id: Number): Observable<Object> {
    return this.http.get(`${this.baseUrl1}/obtenerAlumnos/${id}`);
  }

  // Método para actualizar un alumno
  updateAlumno(id: Number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl1}editarAlumnos/${id}`, value);
  }
}
