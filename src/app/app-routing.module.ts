import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componente/home/home.component';
import { AlumnosComponent } from './componente/alumnos/alumnos.component';
import { AdministradoresComponent } from './componente/administradores/administradores.component';
import { CatedraticosComponent } from './componente/catedraticos/catedraticos.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'administradores',component:AdministradoresComponent},
  {path:'catedraticos',component:CatedraticosComponent},
  {path:'alumnos',component:AlumnosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
