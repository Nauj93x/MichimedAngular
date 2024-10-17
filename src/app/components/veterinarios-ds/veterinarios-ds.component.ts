import { Component, OnInit } from '@angular/core';
import { VeterinarioService } from '../../services/veterinario.service';
import { TopTratamiento } from 'src/app/model/top-tratamiento';
import { TratamientoService } from 'src/app/services/tratamiento.service';

@Component({
  selector: 'app-veterinarios-ds',
  templateUrl: './veterinarios-ds.component.html',
  styleUrls: ['./veterinarios-ds.component.css'],
})
export class VeterinariosDsComponent implements OnInit {
  veterinariosActivos!: number;
  totalVeterinarios!: number;
  veterinariosInactivos!: number;
  isDataLoaded: boolean = false; // Control de datos
  topTratamientos: TopTratamiento[] = [];

  constructor(private veterinarioService: VeterinarioService, private tratamientoService: TratamientoService) {}

  ngOnInit(): void {
    this.veterinarioService.getVeterinariosActivos().subscribe(
      (data) => {
        this.veterinariosActivos = data.activos;
        this.totalVeterinarios = data.total;
        this.veterinariosInactivos = this.totalVeterinarios - this.veterinariosActivos;
        this.isDataLoaded = true; // Marca los datos como cargados
      },
      (error) => {
        console.error('Error al obtener las estadísticas de veterinarios:', error);
      }
    );

    this.tratamientoService.getTop3().subscribe(
      (data: TopTratamiento[]) => {
        this.topTratamientos = data;
        console.log(this.topTratamientos)
        this.isDataLoaded = true; // Marca los datos como cargados
      },
      (error) => {
        console.error('Error al obtener los tratamientos top 3:', error);
      }
    );
  }
}
