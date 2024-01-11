import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrl: './resultados.component.css'
})
export class ResultadosComponent implements OnInit {


  // Declarar una variable para el gráfico

  resultado = 90;
  doughnutChart: any;

  ngOnInit() {
    // Crear el gráfico en el método ngOnInit
    this.doughnutChart = new Chart('doughnutChart', {
      type: 'doughnut',
      data: {
        labels: ['Completado', 'Restante'],
        datasets: [{
          data: [this.resultado, 10], // Aquí puedes ajustar los valores según tu necesidad (por ejemplo, 90/100)
          backgroundColor: ['#36A2EB', '#FFCE56']
        }]
      },
      options: {
        plugins: {
          legend: {
            display: true,
            position: 'bottom'
          }
        },
        animation: {
          animateRotate: true, // Animación de rotación
          animateScale: true,  // Animación de escala
        }
      }
    });
  }
}
