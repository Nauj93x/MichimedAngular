import { Injectable } from '@angular/core';
import { Mascota } from '../model/mascota'; // Interfaz Mascota
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MascotaService {
  private mascotas: Mascota[] = [];

  constructor(
    private http: HttpClient
  ) {}

  getMascotas(): Observable<Mascota[]> {
    return this.http.get<Mascota[]>('http://localhost:8090/mascotas');
  }

  getMascotaById(id: number): Observable<Mascota> {
    return this.http.get<Mascota>('http://localhost:8090/mascotas/' + id);
  }

  // Método para agregar una nueva mascota
  addMascota(mascota: Mascota, idCliente: number) {
    this.http.post(`http://localhost:8090/mascotas/add/${idCliente}`, mascota).subscribe();
  }

  updateMascota(updatedMascota: Mascota): Observable<any> {
    return this.http.put<any>('http://localhost:8090/mascotas/update', updatedMascota);
  }

  deleteMascota(id: number): Observable<any> {
    return this.http.delete<any>('http://localhost:8090/mascotas/delete/' + id);
  }
}
