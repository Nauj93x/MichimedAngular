import { Injectable } from '@angular/core';
import { Mascota } from '../model/mascota'; // Interfaz Mascota

@Injectable({
  providedIn: 'root',
})
export class MascotaService {
  private mascotas: Mascota[] = [];

  constructor() {
    // Datos quemados de mascotas
    this.mascotas = [
      {
        id: 1,
        nombre: 'Fido',
        edad: 3,
        raza: 'Golden Retriever',
        peso: 30.0,
        enfermedad: 'Ninguna',
        estado: 'Activo',
        fechaEntrada: '2023-01-10',
        fechaSalida: '2023-01-20',
        medicamento: 'Antibiótico',
        foto: 'url-de-la-foto-fido.jpg',
      },
      {
        id: 2,
        nombre: 'Max',
        edad: 5,
        raza: 'Bulldog',
        peso: 25.0,
        enfermedad: 'Alergias',
        estado: 'Activo',
        fechaEntrada: '2023-03-15',
        fechaSalida: '2023-03-22',
        medicamento: 'Antialérgico',
        foto: 'url-de-la-foto-max.jpg',
      },
      {
        id: 3,
        nombre: 'Bella',
        edad: 4,
        raza: 'Beagle',
        peso: 15.0,
        enfermedad: 'Obesidad',
        estado: 'Activo',
        fechaEntrada: '2023-05-12',
        fechaSalida: '2023-05-20',
        medicamento: 'Control de peso',
        foto: 'url-de-la-foto-bella.jpg',
      },
      {
        id: 4,
        nombre: 'Rocky',
        edad: 2,
        raza: 'Labrador',
        peso: 35.0,
        enfermedad: 'Problema de cadera',
        estado: 'Activo',
        fechaEntrada: '2023-07-10',
        fechaSalida: '2023-07-18',
        medicamento: 'Analgésico',
        foto: 'url-de-la-foto-rocky.jpg',
      },
      {
        id: 5,
        nombre: 'Luna',
        edad: 6,
        raza: 'Poodle',
        peso: 10.0,
        enfermedad: 'Problema cardíaco',
        estado: 'Activo',
        fechaEntrada: '2023-08-01',
        fechaSalida: '2023-08-10',
        medicamento: 'Cardiotónico',
        foto: 'url-de-la-foto-luna.jpg',
      },
      {
        id: 6,
        nombre: 'Simba',
        edad: 4,
        raza: 'Rottweiler',
        peso: 50.0,
        enfermedad: 'Ninguna',
        estado: 'Activo',
        fechaEntrada: '2023-09-05',
        fechaSalida: '2023-09-12',
        medicamento: 'Ninguno',
        foto: 'url-de-la-foto-simba.jpg',
      },
      {
        id: 7,
        nombre: 'Nala',
        edad: 2,
        raza: 'Pastor Alemán',
        peso: 40.0,
        enfermedad: 'Displasia de cadera',
        estado: 'Activo',
        fechaEntrada: '2023-09-10',
        fechaSalida: '2023-09-18',
        medicamento: 'Suplemento articular',
        foto: 'url-de-la-foto-nala.jpg',
      },
    ];
  }

  // Método para obtener todas las mascotas
  getMascotas(): Mascota[] {
    return this.mascotas;
  }

  // Método para obtener una mascota por su id
  getMascotaById(id: number): Mascota | undefined {
    return this.mascotas.find((mascota) => mascota.id === id);
  }

  // Método para agregar una nueva mascota
  addMascota(mascota: Mascota): void {
    this.mascotas.push(mascota);
  }

  // Método para actualizar una mascota existente
  updateMascota(updatedMascota: Mascota): boolean {
    const index = this.mascotas.findIndex(
      (mascota) => mascota.id === updatedMascota.id
    );
    if (index !== -1) {
      this.mascotas[index] = updatedMascota;
      return true;
    }
    return false;
  }

  // Método para eliminar una mascota por su id
  deleteMascota(id: number): boolean {
    const index = this.mascotas.findIndex((mascota) => mascota.id === id);
    if (index !== -1) {
      this.mascotas.splice(index, 1);
      return true;
    }
    return false;
  }
}
