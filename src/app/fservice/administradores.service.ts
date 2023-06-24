/**
 *Autores:Nancy Obed Martínez Miguel
 *        Salvador Elionaí Antonio Perez
 *Fecha de creación:19 de junio del 2023
 *Fecha de Modificación:24 de junio 2023        
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministradoresService {
  private baseUrl = 'http://localhost:8080/unsis/';
   /**
   * Constructor del servicio AdministradoresService.
   * @param http Objeto HttpClient utilizado para realizar solicitudes HTTP.
   */
  constructor(private http: HttpClient) { }

    /**
   * Obtiene la lista de administradores.
   * @returns Un Observable que emite la respuesta HTTP con la lista de administradores.
   */
  getAdministradores(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + 'listarTodosAdministradores');
  }
  /**
   * Crea un nuevo administrador.
   * @param administradores Objeto que contiene los datos del administrador a crear.
   * @returns Un Observable que emite la respuesta HTTP del proceso de creación.
   */
  createAdministrador(administradores: object): Observable<object> {
    return this.http.post(`${this.baseUrl}` + 'crearAdministrador', administradores);
  }
  /**
   * Elimina un administrador.
   * @param id_admin ID del administrador a eliminar.
   * @returns Un Observable que emite la respuesta HTTP del proceso de eliminación.
   */

  deleteAdministrador(id_admin: any): Observable<any> {
    alert(`${this.baseUrl}eliminarAdministrador/${id_admin}`)
    return this.http.delete(`${this.baseUrl}eliminarAdministrador/${id_admin}`);
  }

   /**
   * Obtiene un administrador por su ID.
   * @param idAdministrador ID del administrador a obtener.
   * @returns Un Observable que emite la respuesta HTTP con los datos del administrador.
   */
  getAdministradorId(idAdministrador: Number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/obtenerAdministradorPorId/${idAdministrador}`);
  }

  /**
   * Actualiza un administrador.
   * @param id ID del administrador a actualizar.
   * @param value Objeto que contiene los nuevos datos del administrador.
   * @returns Un Observable que emite la respuesta HTTP del proceso de actualización.
   */
  updateAdministrador(id: Number, value: any): Observable<Object> {
    alert(`${this.baseUrl}actualizarAdministrador/${id}`)
    return this.http.put(`${this.baseUrl}actualizarAdministrador/${id}`, value);
  }
}

