import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { DrogaService } from '../../services/drogas.service'; // Servicio para manejar la carga de medicamentos
import { Droga } from 'src/app/model/droga';
@Component({
  selector: 'app-drogas',
  templateUrl: './drogas.component.html',
  styleUrls: ['./drogas.component.css']
})
export class DrogasComponent implements OnInit {
  drogas: Droga[] = [];
  errorMessage: string = '';
  @ViewChild('dt') table!: Table; // Referencia a la tabla de PrimeNG

  constructor(private drogaService: DrogaService) {}

  ngOnInit(): void {
    this.drogaService.getDrogas().subscribe((data) => {
      this.drogas = data;
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
          const confirmOverwrite = confirm('Ya hay datos cargados, ¿quieres agregar solo las drogas nuevas o sobrescribirlas?');

          if (confirmOverwrite) {
            // this.agregarDrogasUnicas(data); // Agregar solo las drogas nuevas
            this.drogas = data;
          } else {
            this.drogas = data; // Sobrescribir con los nuevos datos
          }
        } else {
          this.drogas = data;
        }

        this.drogaService.addDrogas(this.drogas); // Guardar los datos en el servidor
        // this.guardarDrogasEnLocalStorage();
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
  agregarDrogasUnicas(nuevasDrogas: any[]): void {
    const drogasExistentesNombres = this.drogas.map(droga => droga.nombre);

    nuevasDrogas.forEach(drogaNueva => {
      if (!drogasExistentesNombres.includes(drogaNueva.nombre)) {
        this.drogas.push(drogaNueva); // Agregar solo las drogas nuevas
      }
    });

    this.guardarDrogasEnLocalStorage(); // Actualiza el localStorage con los nuevos datos
  }

  // **Limpiar datos de la tabla y localStorage**
  clear(dt: Table) {
    dt.clear(); // Limpiar los filtros de la tabla (esto ya funcionaba)
    this.drogas = []; // Limpiar los datos de la tabla
    localStorage.removeItem('drogas'); // Limpiar los datos del localStorage
  }
}
