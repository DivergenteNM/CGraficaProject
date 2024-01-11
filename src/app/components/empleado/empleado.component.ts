import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {
  titulo = "asd";
  nombre = "Juan";
  apellido = "diaz";
  edad = 28;
  empresa = "Google";

  habilitacioncuadrado = false;
  usuRegistrado = false;
  textoDeRegistro = "No hay nadie registrado";


  getRegitroUsuario() {

    this.usuRegistrado = false;
  }

  setUsuarioRegistrado(event: Event) {
    //alert ("El usuario se acaba de registrar");
    //this.textoDeRegistro="El usuario se acaba de registrar";
    // alert(event.target);

    if ((<HTMLInputElement>event.target).value == "si") {
      this.textoDeRegistro = "El usuario se acaba de registrar";
    } else {
      this.textoDeRegistro = "No hay nadie registrado";
    }
  }

  setTest1(event:Event){
    if((<HTMLInputElement>event.target).value == "1"){
      alert(event.target);
    } else {
      alert("its works");
    }
   
  }

  empleados:Empleado[]=[

    new Empleado("Juan","Diaz","Presidente",7500),
    new Empleado("Ana","Martin","Directora",7500),
    new Empleado("JuanP","Fdez","Jefe seccion",7500),
    new Empleado("Juan","Diaz","Administración",7500),

  ];

  agregarEmpleado(){

    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleados.push(miEmpleado);
  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;




  constructor() {

  }
}
