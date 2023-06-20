import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministradoresService {
  private baseUrl = 'http://localhost:8080/unsis/';
  constructor(private http:HttpClient) { }

  getAdministradores(): Observable<any> {
    return this.http.get('${this.baseUrl}'+'listarTodosAdministradores');
  }
  createAdministrador(administradores: object): Observable<object> {
    return this.http.get('${this.baseUrl}'+'crearAdministrador');
  }

  deleteAdministrador(id_admin: Number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}eliminarAdministrador/${id_admin}`, { responseType: 'text' });  
  }  
  
  getAdministradorId(idAdministrador: Number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}/obtenerAdministradorPorId/${idAdministrador}`);  
  }  
  
  updateAdministrador(id: number, value: any): Observable<Object> {  
    return this.http.post(`${this.baseUrl}/actualizarRegistro/${id}`, value);  
  }  
}

  