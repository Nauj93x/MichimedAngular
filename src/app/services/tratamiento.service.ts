import { Injectable } from '@angular/core';
import { Tratamiento } from '../model/tratamiento';  // Interfaz Tratamiento
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HistorialMedicoDTO } from '../model/historial-medico-dto';
import { TopTratamiento } from '../model/top-tratamiento';

@Injectable({
  providedIn: 'root'
})
export class TratamientoService {

  constructor(
    private http: HttpClient // Importa HttpClient
  ) {
  }

  getTop3(): Observable<TopTratamiento[]> {
    return this.http.get<TopTratamiento[]>('http://localhost:8090/tratamientos/top-3');
  }

  // Método para obtener todos los tratamientos
  getTratamientos(): Observable<Tratamiento[]> {
    return this.http.get<Tratamiento[]>('http://localhost:8090/tratamientos');
  }

  addTratamiento(tratamiento: Tratamiento){
    this.http.post<Tratamiento>('http://localhost:8090/tratamientos/add', tratamiento).subscribe();
  }

  getHistorialMedicoByMascotaId(mascotaId: number): Observable<HistorialMedicoDTO[]> {
    return this.http.get<HistorialMedicoDTO[]>(`http://localhost:8090/tratamientos/historial-medico/${mascotaId}`);
  }

  getTratamientosPorMes(): Observable<any> {
    return this.http.get<any>('http://localhost:8090/tratamientos/tratamientos-por-mes');
  }
}
