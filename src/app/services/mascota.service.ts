import { Injectable } from '@angular/core';
import { Mascota } from '../model/mascota'; // Interfaz Mascota
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root',
})
export class MascotaService {

  constructor(private http: HttpClient) {}

  getMascotas(): Observable<Mascota[]> {
    return this.http.get<Mascota[]>('http://localhost:8090/mascotas');
  }

  getMascotaById(id: number): Observable<Mascota> {
    return this.http.get<Mascota>('http://localhost:8090/mascotas/' + id);
  }

  // Obtiene el estado de las mascotas
  getMascotasState(): Observable<{ "En tratamiento": number; "Tratado": number }> {
    return this.http
      .get<{ "En tratamiento": number; "Tratado": number }>(
        'http://localhost:8090/mascotas/estado'
      )
      .pipe(
        catchError((error) => {
          console.error('Error fetching mascotas state:', error);
          return throwError(error);
        })
      );
  }

      getClienteByMascotaId(id: number): Observable<Cliente> {
        return this.http.get<Cliente>('http://localhost:8090/mascotas/cliente/' + id);
      }


  // Método para agregar una nueva mascota
  addMascota(mascota: Mascota, idCliente: number) {
    this.http
      .post(`http://localhost:8090/mascotas/add/${idCliente}`, mascota)
      .subscribe();
  }

  // Método para actualizar una mascota existente
  updateMascota(updatedMascota: Mascota): Observable<any> {
    return this.http.put<any>(
      'http://localhost:8090/mascotas/update',
      updatedMascota
    );
  }

  // Elimina una mascota por su ID
  deleteMascota(id: number): Observable<any> {
    return this.http.delete<any>('http://localhost:8090/mascotas/delete/' + id);
  }
}
