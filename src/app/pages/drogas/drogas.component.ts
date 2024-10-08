import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { DrogaService } from '../../services/drogas.service'; // Servicio para manejar la carga de medicamentos

@Component({
  selector: 'app-drogas',
  templateUrl: './drogas.component.html',
  styleUrls: ['./drogas.component.css']
})
export class DrogasComponent implements OnInit {
  drogas: any[] = [];
  errorMessage: string = '';

  @ViewChild('dt') table!: Table; // Referencia a la tabla de PrimeNG

  constructor(private drogaService: DrogaService) {}

  ngOnInit(): void {
    this.drogas = []; // Inicializar la tabla vacía
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
        this.drogas = data;
        this.errorMessage = '';
      },
      (error) => {
        this.errorMessage = 'Error al procesar el archivo. Asegúrate de que el formato sea correcto.';
      }
    );
  }

  // Limpiar los filtros de la tabla y reiniciar los datos
  clear(dt: Table) {
    // Limpiar los filtros de la tabla
    dt.clear();

    // Reiniciar la tabla de datos, puedes establecer el arreglo `drogas` a un estado vacío o restaurar los datos iniciales si lo deseas
    this.drogas = []; // Reinicia los datos de la tabla
  }
}
