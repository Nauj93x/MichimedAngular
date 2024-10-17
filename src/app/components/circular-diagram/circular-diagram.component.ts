import {
  Component,
  ChangeDetectorRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-circular-diagram',
  templateUrl: './circular-diagram.component.html',
  styleUrls: ['./circular-diagram.component.css'],
})
export class CircularDiagramComponent implements OnChanges {
  @Input() enTratamiento: number = 0;
  @Input() tratadas: number = 0;
  data: any;
  options: any;

  constructor(private cdr: ChangeDetectorRef) {
    const documentStyle = getComputedStyle(document.documentElement);

    this.data = {
      datasets: [
        {
          data: [this.enTratamiento, this.tratadas], // Inicializa los datos
          backgroundColor: ['#7FA1C3', '#D0B8A8'],
          borderWidth: 0,
          hoverBackgroundColor: ['#7FA1C3', '#D0B8A8'],
        },
      ],
    };

    // Opciones del gráfico, incluyendo la leyenda a la izquierda y el punto en forma de círculo
    this.options = {
      cutout: '70%',
      plugins: {
        legend: {
          position: 'left', // Posicionamos las etiquetas a la izquierda
          labels: {
            color: documentStyle.getPropertyValue('--text-color'),
            usePointStyle: true, // Usamos los puntos en forma de círculo
            pointStyle: 'circle', // Especificamos que sean círculos
            padding: 0, // Espacio entre las leyendas (opcional, afecta solo entre labels)
          },
        },
      },
    };
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['enTratamiento'] || changes['tratadas']) {
      this.updateChartData();
    }
  }

  updateChartData() {
    this.data.datasets[0].data = [this.enTratamiento, this.tratadas];
    this.cdr.detectChanges(); // Detecta cambios manualmente
  }
}
