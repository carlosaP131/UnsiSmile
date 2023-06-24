/**
 * Autores: Carlos Aurelio Alcantara Perez, Baldomero Sainos Hernandez
 * Fecha de creacion: 16/06/23
 * Fecha de modificacion: 16/06/23
 * Comentarios: Atributos del objeto Catedratico
 */
export class Catedratico {
    idCatedratico : Number = 0 
    nombre: String = ""
    nombre2: String = " " 
    apellido:String = " " 
    apellido2:String = " " 
    curp:String = " " 
    telefono:String = " " 
    sexo: String = " "//cambiar a char 0
    fechaNacimiento: Date= new Date
    numeroTrabajador: String = " "
    emailCatedratico: String = " "
    estatus: boolean= true
}
