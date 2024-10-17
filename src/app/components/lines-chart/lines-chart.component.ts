import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lines-chart',
  templateUrl: './lines-chart.component.html',
  styleUrls: ['./lines-chart.component.css']
})
export class LinesChartComponent implements OnChanges {
  @Input() labels: string[] = []; // Etiquetas del gráfico
  @Input() dataValues: number[] = []; // Valores del gráfico
  data: any;
  options: any;

  constructor() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    // Configuración de las opciones del gráfico
    this.options = {
      plugins: {
        legend: {
          display: false, // Oculta la leyenda
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColor // Color etiquetas eje x
          }
        },
        y: {
          ticks: {
            color: textColor // Color etiquetas eje y
          }
        }
      }
    };
  }

  ngOnChanges(changes: SimpleChanges) {
    // Actualiza los datos del gráfico cuando cambia el valor de las etiquetas o valores
    if (changes['labels'] || changes['dataValues']) {
      this.updateChartData();
    }
  }

  updateChartData() {
    // Actualiza los datos del gráfico
    this.data = {
      labels: this.labels,
      datasets: [
        {
          data: this.dataValues,
          fill: false,
          borderColor: '#7FA1C3',
          tension: 0.4
        }
      ]
    };
  }
}
