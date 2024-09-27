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
    private http: HttpClient // Importa HttpClient
  ) {}

  // Método para obtener todas las mascotas
  getMascotas(): Observable<Mascota[]> {
    return this.http.get<Mascota[]>('http://localhost:8090/mascotas');
  }

  // Método para obtener una mascota por su id
  getMascotaById(id: number): Observable<Mascota> {
    return this.http.get<Mascota>('http://localhost:8090/mascotas/' + id);
  }

  // Método para agregar una nueva mascota
  addMascota(mascota: Mascota) {
    this.http.post('http://localhost:8090/mascotas/add', mascota).subscribe();
  }

  // Método para actualizar una mascota existente
  updateMascota(updatedMascota: Mascota) {
    this.http.put('http://localhost:8090/mascotas/update', updatedMascota).subscribe();
  }

  // Método para eliminar una mascota por su id
  deleteMascota(id: number) {
    this.http.delete('http://localhost:8090/mascotas/delete/' + id).subscribe();
  }
}
