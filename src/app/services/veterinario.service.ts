import { Injectable } from '@angular/core';
import { Veterinario } from '../model/veterinario';  // Interfaz Veterinario
import { MascotaService } from './mascota.service';  // Para obtener las mascotas de un veterinario
import { Mascota } from '../model/mascota';           // Interfaz Mascota

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {

  private veterinarios: Veterinario[] = [];

  constructor(private mascotaService: MascotaService) {
    // Obtener mascotas a través del servicio de mascotas
    const mascotas1: Mascota[] = [this.mascotaService.getMascotaById(1), this.mascotaService.getMascotaById(2)].filter(mascota => mascota != null) as Mascota[];
    const mascotas2: Mascota[] = [this.mascotaService.getMascotaById(3)].filter(mascota => mascota != null) as Mascota[];

    // Inicializar veterinarios
    this.veterinarios = [
      {
        id: 1,
        cedula: '1234567890',
        nombre: 'Dr. Juan Martínez',
        contrasena: 'password123',
        especialidad: 'Cardiología',
        urlFoto: 'url-de-la-foto-vet1.jpg',
        numAtenciones: 100,
        mascotas: mascotas1  // Relacionamos el veterinario con las mascotas
      },
      {
        id: 2,
        cedula: '0987654321',
        nombre: 'Dra. Ana Pérez',
        contrasena: 'password456',
        especialidad: 'Dermatología',
        urlFoto: 'url-de-la-foto-vet2.jpg',
        numAtenciones: 200,
        mascotas: mascotas2  // Relacionamos el veterinario con las mascotas
      }
    ];
  }

  // Método para obtener todos los veterinarios
  getVeterinarios(): Veterinario[] {
    return this.veterinarios;
  }

  // Método para obtener un veterinario por su id
  getVeterinarioById(id: number): Veterinario | undefined {
    return this.veterinarios.find(veterinario => veterinario.id === id);
  }
}
