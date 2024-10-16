import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MascotaService } from '../../services/mascota.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  enTratamiento: number = 0;
  tratadas: number = 0;
  data: any;
  options: any;
  isDataLoaded: boolean = false;  // Control de datos

  constructor(private mascotaService: MascotaService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.mascotaService.getMascotasState().subscribe(
      (estado: { tratadas: number; enTratamiento: number }) => {
        console.log('Estado de mascotas recibido:', estado);
        this.enTratamiento = estado.enTratamiento;
        this.tratadas = estado.tratadas;

        this.updateChart();
        this.isDataLoaded = true;
      },
      (error) => {
        console.error('Error al obtener el estado de las mascotas:', error);
      }
    );

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {

      datasets: [
        {
          data: [0, 0], // Inicializa los datos
          backgroundColor: [
            '#7FA1C3', '#D0B8A8'
          ],
          borderWidth: 0,
          hoverBackgroundColor: [
            '#7FA1C3', '#D0B8A8'
          ],
        },
      ],
    };

    // Opciones del gráfico, incluyendo la leyenda a la izquierda y el punto en forma de círculo
    this.options = {
      cutout: '70%',
      plugins: {
        legend: {
          position: 'left',  // Posicionamos las etiquetas a la izquierda
          labels: {
            color: textColor,
            usePointStyle: true,  // Usamos los puntos en forma de círculo
            pointStyle: 'circle',  // Especificamos que sean círculos
            padding: 0,  // Espacio entre las leyendas (opcional, afecta solo entre labels)
          },
        },
      },
      // Layout que controla el padding general del gráfico
      layout: {
        padding: 0,
        margin: 0
      }
    };
  }

  updateChart() {
    if (this.data && this.data.datasets) {
      this.data.datasets[0].data = [this.enTratamiento, this.tratadas];
      this.cdr.detectChanges();
    }
  }
}
