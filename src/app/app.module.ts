/*
 * Autores: Carlos Aurelio Alcantara Perez.
 * Fecha de creacion: 19/06/23
 * Fecha de modificacion: 19/06/23
 * Comentarios: Este código configura el módulo principal de una aplicación Angular.
 */

//Importación de los módulos necesarios, 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CatedraticosComponent } from './componente/catedraticos/catedraticos.component';
import { AlumnosComponent } from './componente/alumnos/alumnos.component';
import { AdministradoresComponent } from './componente/administradores/administradores.component';
import { HomeComponent } from './componente/home/home.component';
import { FormsModule } from '@angular/forms';

/**
 * @NgModule: Se utiliza para configurar y definir el módulo principal de la aplicación
 */
@NgModule({
  declarations: [
    AppComponent,
    CatedraticosComponent,
    AlumnosComponent,
    AdministradoresComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
