import { Injectable } from '@angular/core';
import { Tratamiento } from '../model/tratamiento';  // Interfaz Tratamiento
import { MascotaService } from './mascota.service';  // Servicio para obtener mascotas
import { VeterinarioService } from './veterinario.service';  // Servicio para obtener veterinarios
import { DrogaService } from './drogas.service';  // Servicio para obtener drogas

@Injectable({
  providedIn: 'root'
})
export class TratamientoService {
  private tratamientos: Tratamiento[] = [];

  constructor(
    private mascotaService: MascotaService,
    private veterinarioService: VeterinarioService,
    private drogaService: DrogaService
  ) {
    // Datos relacionados con servicios de mascotas, veterinarios y drogas
    const mascota1 = this.mascotaService.getMascotaById(1) || null;  // Asignamos null si no existe la mascota
    const veterinario1 = this.veterinarioService.getVeterinarioById(1) || null;  // Asignamos null si no existe el veterinario
    const drogasTratamiento1 = this.drogaService.getDrogas().slice(0, 2); // Seleccionamos las primeras 2 drogas

    const mascota2 = this.mascotaService.getMascotaById(2) || null;  // Asignamos null si no existe la mascota
    const veterinario2 = this.veterinarioService.getVeterinarioById(2) || null;  // Asignamos null si no existe el veterinario
    const drogasTratamiento2 = this.drogaService.getDrogas().slice(2, 3); // Seleccionamos la 3ª droga

    this.tratamientos = [
      {
        id: 1,
        fecha: '2023-01-15',
        mascota: mascota1,
        veterinario: veterinario1,
        drogas: drogasTratamiento1
      },
      {
        id: 2,
        fecha: '2023-03-18',
        mascota: mascota2,
        veterinario: veterinario2,
        drogas: drogasTratamiento2
      }
    ];
  }

  // Método para obtener todos los tratamientos
  getTratamientos(): Tratamiento[] {
    return this.tratamientos;
  }

  // Método para obtener un tratamiento por su id
  getTratamientoById(id: number): Tratamiento | undefined {
    return this.tratamientos.find(tratamiento => tratamiento.id === id);
  }
}
