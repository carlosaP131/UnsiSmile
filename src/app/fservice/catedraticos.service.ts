/**
 * Autores: Carlos Aurelio Alcantara Perez, Baldomero Sainos Hernández
 * Fecha de creacion: 14/06/23
 * Fecha de modificacion: 15/06/23
 * Comentarios: Este es el service de catedratico contendra el crud de catedrático
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatedraticoService {

  //Variable privada para enlazar el back con el from.
  private baseUrl = 'http://localhost:8080/unsis/';
  //Pasar el httpclient como parametro en el constructor.
  constructor(private http: HttpClient) { }
  //Métodos que se enlazan con el back.
  /**
   * Método para obtener un catedrático.
   * @returns 
   */
  getCatedraticos(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + 'listarTodosCatedraticos');
  }
  /**
   * Método para crear un catedrático. 
   * @param catedratico 
   * @returns 
   */
  createCatedraticos(catedratico: object): Observable<object> {
    return this.http.post(`${this.baseUrl}` + 'crearCatedraticos', catedratico);
  }
  /**
   * Borrar un catedrático por su id.
   * @param id_Catedratico 
   * @returns 
   */
  deleteCatedraticos(id_Catedratico: Number): Observable<any> {
    return this.http.delete(`${this.baseUrl}eliminarCatedraticos/${id_Catedratico}`, { responseType: 'text' });

  }
  /**
   * Obtener Catedráticos por su id.
   * @param id 
   * @returns 
   */
  getCatedraticosId(id: Number): Observable<object> {
    return this.http.get(`${this.baseUrl}/obtenerCatedratico/${id}`)
  }
  /**
   * Actualizar un catedrático y retornar el objeto.
   * @param id 
   * @param value 
   * @returns 
   */
  upateCatedraticosId(id: Number, value: any): Observable<object> {

    return this.http.put(`${this.baseUrl}actualizarCatedraticos/${id}`, value);
  }

}
