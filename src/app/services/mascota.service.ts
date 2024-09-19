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
        nombre: 'Michito',
        edad: 3,
        raza: 'Angola',
        peso: 30.0,
        enfermedad: 'Ninguna',
        estado: 'En tratamiento',
        fechaEntrada: '2023-01-10',
        fechaSalida: '2023-01-20',
        medicamento: 'Antibiótico',
        foto: 'https://images.ctfassets.net/denf86kkcx7r/4IPlg4Qazd4sFRuCUHIJ1T/f6c71da7eec727babcd554d843a528b8/gatocomuneuropeo-97?fm=webp&w=612'
      },
      {
        id: 2,
        nombre: 'Max',
        edad: 5,
        raza: 'Maine Coon',
        peso: 25.0,
        enfermedad: 'Insuficiencia renal crónica',
        estado: 'Tratado',
        fechaEntrada: '2023-03-15',
        fechaSalida: '2023-03-22',
        medicamento: 'Benazepril',
        foto: 'https://urgenciesveterinaries.com/wp-content/uploads/2023/09/survet-gato-caida-pelo-01.jpeg'
      },
      {
        id: 3,
        nombre: 'Bella',
        edad: 4,
        raza: 'Angola',
        peso: 15.0,
        enfermedad: 'Obesidad',
        estado: 'Tratado',
        fechaEntrada: '2023-05-12',
        fechaSalida: '2023-05-20',
        medicamento: 'Control de peso',
        foto: 'https://cdn.shopify.com/s/files/1/0268/6861/files/Gato-siames-1200x900_480x480.jpg?v=1678812075'
      },
      {
        id: 4,
        nombre: 'Lucy',
        edad: 2,
        raza: 'Persa',
        peso: 35.0,
        enfermedad: 'Problema de cadera',
        estado: 'En tratamiento',
        fechaEntrada: '2023-07-10',
        fechaSalida: '2023-07-18',
        medicamento: 'Analgésico',
        foto: 'https://www.lapulgada.co/cdn/shop/collections/gato-persa-2_675x675.png?v=1721917322'
      },
      {
        id: 5,
        nombre: 'Luna',
        edad: 6,
        raza: 'Siamés',
        peso: 10.0,
        enfermedad: 'Problema cardíaco',
        estado: 'Tratado',
        fechaEntrada: '2023-08-01',
        fechaSalida: '2023-08-10',
        medicamento: 'Cardiotónico',
        foto: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131'
      },
      {
        id: 6,
        nombre: 'Nala',
        edad: 4,
        raza: 'Maine Coon',
        peso: 50.0,
        enfermedad: 'Ninguna',
        estado: 'Tratado',
        fechaEntrada: '2023-09-05',
        fechaSalida: '2023-09-12',
        medicamento: 'Ninguno',
        foto: 'https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg'
      },
      {
        id: 7,
        nombre: 'Kayn',
        edad: 2,
        raza: 'Angora',
        peso: 40.0,
        enfermedad: 'Displasia de cadera',
        estado: 'En tratamiento',
        fechaEntrada: '2023-09-10',
        fechaSalida: '2023-09-18',
        medicamento: 'Suplemento articular',
        foto: 'https://plus.unsplash.com/premium_photo-1673461703605-0c6cc77e1a35?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2F0b3xlbnwwfHwwfHx8MA%3D%3D'
      },
      {
        id: 8,
        nombre: 'Luna',
        edad: 2,
        raza: 'Maine Coon',
        peso: 4.7,
        enfermedad: 'Gingivitis felina',
        estado: 'En tratamiento',
        fechaEntrada: '2019-07-07',
        fechaSalida: '2018-09-20',
        medicamento: 'Metronidazol',
        foto: 'https://plus.unsplash.com/premium_photo-1664299749481-ac8dc8b49754?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2F0b3xlbnwwfHwwfHx8MA%3D%3D'
      }
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
