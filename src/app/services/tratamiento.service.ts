import { Injectable } from '@angular/core';
import { Tratamiento } from '../model/tratamiento';  // Interfaz Tratamiento
import { MascotaService } from './mascota.service';  // Servicio para obtener mascotas
import { VeterinarioService } from './veterinario.service';  // Servicio para obtener veterinarios
import { DrogaService } from './drogas.service';  // Servicio para obtener drogas
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HistorialMedicoDTO } from '../model/historial-medico-dto';

@Injectable({
  providedIn: 'root'
})
export class TratamientoService {

  constructor(
    private http: HttpClient // Importa HttpClient
  ) {
  }

  // Método para obtener todos los tratamientos
  getTratamientos(): Observable<Tratamiento[]> {
    return this.http.get<Tratamiento[]>('http://localhost:8090/tratamientos');
  }

  addTratamiento(tratamiento: Tratamiento) {
    this.http.post('http://localhost:8090/tratamientos/add', tratamiento).subscribe();
  }

  getHistorialMedicoByMascotaId(mascotaId: number): Observable<HistorialMedicoDTO[]> {
    return this.http.get<HistorialMedicoDTO[]>(`http://localhost:8090/tratamientos/historial-medico/${mascotaId}`);
  }
}
