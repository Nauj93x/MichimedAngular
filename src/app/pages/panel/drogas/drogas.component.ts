import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { DrogaService } from '../../../services/drogas.service'; // Servicio para manejar la carga de medicamentos
import { Droga } from 'src/app/model/droga';
@Component({
  selector: 'app-drogas',
  templateUrl: './drogas.component.html',
  styleUrls: ['./drogas.component.css']
})
export class DrogasComponent implements OnInit {
  loading: boolean = true;
  drogas: Droga[] = [];
  errorMessage: string = '';
  @ViewChild('dt') table!: Table; // Referencia a la tabla de PrimeNG

  constructor(private drogaService: DrogaService) {}

  ngOnInit(): void {
    this.drogaService.getDrogas().subscribe((data) => {
      this.drogas = data;
      this.loading = false;
    });
  }

  // Método para cargar medicamentos desde un archivo Excel
  cargarMedicamentos(event: any): void {
    const file = event.target.files[0];

    if (!file) {
      this.errorMessage = 'Por favor, sube un archivo válido.';
      return;
    }

    this.drogaService.cargarMedicamentos(file).subscribe(
      (data: any) => {
        // Verifica si ya hay datos en la tabla y solicita confirmación antes de sobrescribir
        if (this.drogas.length > 0) {
          this.agregarDrogasUnicas(data); // Agregar solo las drogas nuevas
        } else {
          this.drogas = data;
        }

        // Guardar las drogas en el servidor
        this.drogaService.addDrogas(this.drogas).subscribe(
          () => {
            // Una vez guardadas, vuelve a cargar las drogas desde el servidor para tener los IDs actualizados
            this.drogaService.getDrogas().subscribe(
              (drogasActualizadas: any) => {
                this.drogas = drogasActualizadas;
              },
              (error) => {
                this.errorMessage = 'Error al obtener las drogas actualizadas.';
              }
            );
          },
          (error) => {
            this.errorMessage = 'Error al guardar las drogas en el servidor.';
          }
        );
        this.errorMessage = '';
      },
      (error) => {
        this.errorMessage = 'Error al procesar el archivo. Asegúrate de que el formato sea correcto.';
      }
    );
  }

  // Método para guardar las drogas en localStorage
  guardarDrogasEnLocalStorage(): void {
    localStorage.setItem('drogas', JSON.stringify(this.drogas));
  }

  // Método para agregar solo las drogas nuevas
  agregarDrogasUnicas(nuevasDrogas: any[]) {
    // Usar un set para evitar duplicados
    const drogasExistentes = new Set(this.drogas.map(droga => droga.nombre)); // Asumiendo que 'nombre' es el identificador de la droga

    // Filtrar las nuevas drogas que no están ya en la lista
    const drogasUnicas = nuevasDrogas.filter(nuevaDroga => !drogasExistentes.has(nuevaDroga.nombre));

    // Agregar las drogas únicas a la lista actual
    this.drogas = [...this.drogas, ...drogasUnicas];
  }

  // **Limpiar datos de la tabla y localStorage**
  clear(dt: Table) {
    dt.clear(); // Limpiar los filtros de la tabla (esto ya funcionaba)
    this.drogas = []; // Limpiar los datos de la tabla
    localStorage.removeItem('drogas'); // Limpiar los datos del localStorage
  }
}
