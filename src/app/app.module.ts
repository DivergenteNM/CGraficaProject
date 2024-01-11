import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { FacultadComponent } from './components/facultad/facultad.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { FormsModule } from '@angular/forms';
import { DirectivasComponent } from './components/directivas/directivas.component';

const routes:Routes = [
  { path: '', component: HomeComponent },
  { path: 'estudiantes', component: EstudiantesComponent },
  { path: 'facultad', component: FacultadComponent },
  { path: 'resultados', component: ResultadosComponent },
  { path: 'empleado', component: EmpleadoComponent },
  { path: 'directivas', component: DirectivasComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    EstudiantesComponent,
    FacultadComponent,
    HomeComponent,
    ResultadosComponent,
    EmpleadoComponent,
    DirectivasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    provideClientHydration()
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
