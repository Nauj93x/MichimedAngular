import { Component, OnInit } from '@angular/core';
import { MascotaService } from 'src/app/services/mascota.service';
import { TratamientoService } from 'src/app/services/tratamiento.service';
import { ChangeDetectorRef } from '@angular/core';
import { Tratamiento } from 'src/app/model/tratamiento';
import { DrogaService } from 'src/app/services/drogas.service';
import { Droga } from 'src/app/model/droga';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  drogas: Droga[] = [];
  tratamientos: Tratamiento[] = [];
  enTratamiento: number = 0;
  tratadas: number = 0;
  labels: string[] = [];
  dataValues: number[] = [];
  isDataLoaded: boolean = false; // Control de datos

  constructor(
    private mascotaService: MascotaService,
    private tratamientoService: TratamientoService,
    private drogaService: DrogaService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // Obtiene el estado de las mascotas
    this.mascotaService.getMascotasState().subscribe(
      (estado: { "En tratamiento": number; "Tratado": number }) => {
        console.log('Estado de mascotas recibido:', estado);
        this.enTratamiento = estado["En tratamiento"];
        this.tratadas = estado["Tratado"];
        this.isDataLoaded = true;
      },
      (error) => {
        console.error('Error al obtener el estado de las mascotas:', error);
      }
    );

    // Obtiene los tratamientos por mes
    this.tratamientoService.getTratamientosPorMes().subscribe(
      (data: { [key: string]: number }) => {
        this.labels = Object.keys(data);
        this.dataValues = Object.values(data);
        this.isDataLoaded = true;
        this.cdr.detectChanges(); // Detecta cambios manualmente
      },
      (error) => {
        console.error('Error al obtener los tratamientos por mes:', error);
      }
    );

    // Obtiene Drogas
    this.drogaService.getDrogas().subscribe(
      (drogas) => {
        this.drogas = drogas;
        this.isDataLoaded = true;
      },
      (error) => {
        console.error('Error al obtener las drogas:', error);
      }
    )
  }
}
