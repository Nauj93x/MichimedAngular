import { Injectable } from '@angular/core';
import { Veterinario } from '../model/veterinario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MascotaService } from './mascota.service';  // Para obtener las mascotas de un veterinario
import { Mascota } from '../model/mascota';           // Interfaz Mascota

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {

  private veterinarios: Veterinario[] = [];

  constructor(
    private http: HttpClient // Importa HttpClient
  ) {}


  // Método para obtener todos los veterinarios
  getVeterinarios(): Observable<Veterinario[]> {
    return this.http.get<Veterinario[]>('http://localhost:8090/veterinarios');
  }

  getVeterinarioMascotas(id: number): Observable<Mascota[]> {
    return this.http.get<Mascota[]>(
      'http://localhost:8090/veterinarios/mascotas/' + id
    );}

    getVeterinarioById(id: number): Observable<Veterinario> {
      return this.http.get<Veterinario>('http://localhost:8090/veterinarios/' + id);
    }

    addVeterinario(veterinario: Veterinario) {
      this.http.post('http://localhost:8090/veterinarios/add', veterinario).subscribe();
    }

    updateVeterinario(updatedCliente: Veterinario) {
      this.http
        .put('http://localhost:8090/vetrinarios/update', updatedCliente)
        .subscribe();
    }

    deleteVeterinario(id: number) {
      this.http.delete('http://localhost:8090/veterinarios/delete/' + id).subscribe();
    }
}

