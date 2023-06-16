/**
 * Autores: Carlos Aurelio Alcantara Perez, Baldomero Sainos Hernandez
 * Fecha de creacion: 14/06/23
 * Fecha de modificacion: 15/06/23
 * Comentarios: Este es el service de catedratico contendra el crud de catedratico
 */
import{ HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatedraticoService {
    //Variable privada para enlazar el back con el from
    private baseUrl='http://localhost:8080/unsis/';
    //pasar el httpclient como parametro en el constructor
    constructor(private http:HttpClient) { }
    //metodos que se enlazan con el back 
    getCatedraticos():Observable<any>{
      return this.http.get(`${this.baseUrl}`+'listarCatedratico');
    }
    createCatedraticos(catedratico:object):Observable<object>{
      return this.http.post(`${this.baseUrl}'+'crearCatedraticos`,catedratico);
    }
    deleteCatedraticos(id:number):Observable<any>{
      return this.http.delete(`${this.baseUrl}eliminarCatedraticos/${id}`,{responseType:'text'})
    }
    getCatedraticosId(id:number):Observable<object>{
      return this.http.get(`${this.baseUrl}/obtenerCatedratico/${id}`)
    }
    upateCatedraticosId(id:number, value: any):Observable<object>{
      return this.http.get(`${this.baseUrl}/actualizarCatedraticos/${id}`, value);
    }
}
