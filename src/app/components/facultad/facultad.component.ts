import { Component } from '@angular/core';
import { Programa } from '../../datos/programa';
import { PROGRAMAS } from '../../datos/programas';
import { Estudiante } from '../../datos/estudiante';
import { SaberPro } from '../../datos/saberpro';

@Component({
  selector: 'facultad-component',
  templateUrl: './facultad.component.html',
  styleUrl: './facultad.component.css'
})
export class FacultadComponent {
  name: string = "Facultad de Ingeniería";
  programas123 = [{ id: "52", nombre: "Ingeniería de Sistemas" }, { id: "53", nombre: "Ingeniería Civil" },
  { id: "54", nombre: "Ingeniería Electrónica" }];
  programas = PROGRAMAS;
  estudiantesSeleccionados = [{id:"", nombre:"", saberPro: {lecturaCritica: 0, ingles: 0, ciudadanas: 0, razonamiento: 0, comunicacionEscrita: 0}}];
programaSeleccionado: Programa = {id:"",nombre:"", estudiantes:[]};
  programaId: string = "";
  estudianteId: string = "";
  estudianteTest: string = "0000"; // Una variable para que se compare con ella misma y pueda aparecer la tabla de resultados solo cuando este completo la seleccion de programa y estudiante, de lo contrario aparecera así no este lleno todo.
  estudianteSeleccionado: Estudiante = { id: "", nombre: "", saberPro: { lecturaCritica: 0, ingles: 0, ciudadanas: 0, razonamiento: 0, comunicacionEscrita: 0 } };
  saberPro: SaberPro = { lecturaCritica: 0, ingles: 0, ciudadanas: 0, razonamiento: 0, comunicacionEscrita: 0 };

  onChange(event: any) {
    this.programaId = event.target.value;
    this.buscarPrograma(this.programaId);
    console.log("El id del programa es: " + this.programaId);
  }

  onChange1(event: any) {
    this.estudianteTest = event.target.value;
  }

  buscarPrograma(programaId: string): void {
    for (let index = 0; index < this.programas.length; index++) {
      const element = this.programas[index];
      if (element.id == programaId) {
        this.programaSeleccionado = element;
        this.estudiantesSeleccionados = element.estudiantes;
        break;
      }
    }
  }


}
