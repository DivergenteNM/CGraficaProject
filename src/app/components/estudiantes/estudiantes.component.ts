import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'Estudiantes-component',
  templateUrl: './estudiantes.component.html',
  styleUrl: './estudiantes.component.css'
})


export class EstudiantesComponent {
  name: string = "Facultad de Ingeniería";
  programas = [{ id: "52", nombre: "Ingeniería de Sistemas" }, { id: "53", nombre: "Ingeniería Civil" },
  { id: "54", nombre: "Ingeniería Electrónica" }];


  selectedValue: string | undefined;

  @ViewChild('message1') message1Element!: ElementRef;
  @ViewChild('message2') message2Element!: ElementRef;

  showMessage() {
    // Oculta ambos mensajes al inicio
    this.message1Element.nativeElement.style.display = "none";
    this.message2Element.nativeElement.style.display = "none";

    // Muestra el mensaje correspondiente según la opción seleccionada
    if (this.selectedValue === "1") {
      this.message1Element.nativeElement.style.display = "block";
    } else if (this.selectedValue === "2") {
      this.message2Element.nativeElement.style.display = "block";
    }
  }

}
