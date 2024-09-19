import { Injectable } from '@angular/core';
import { Droga } from '../model/droga';  // Interfaz Droga 

@Injectable({
  providedIn: 'root'
})
export class DrogaService {

  private drogas: Droga[] = [];

  constructor() {
    // Datos quemados de drogas
    this.drogas = [
      {
        id: 1,
        nombre: 'Ibuprofeno',
        precioCompra: 5.0,
        precioVenta: 10.0,
        uniDisp: 100,
        uniVend: 50
      },
      {
        id: 2,
        nombre: 'Paracetamol',
        precioCompra: 3.0,
        precioVenta: 8.0,
        uniDisp: 150,
        uniVend: 75
      },
      {
        id: 3,
        nombre: 'Amoxicilina',
        precioCompra: 4.5,
        precioVenta: 9.5,
        uniDisp: 200,
        uniVend: 120
      },
      {
        id: 4,
        nombre: 'Antihistamínico',
        precioCompra: 2.5,
        precioVenta: 7.0,
        uniDisp: 250,
        uniVend: 180
      },
      {
        id: 5,
        nombre: 'Cefalexina',
        precioCompra: 6.0,
        precioVenta: 12.0,
        uniDisp: 90,
        uniVend: 40
      },
      {
        id: 6,
        nombre: 'Diclofenaco',
        precioCompra: 4.0,
        precioVenta: 8.0,
        uniDisp: 130,
        uniVend: 85
      },
      {
        id: 7,
        nombre: 'Prednisona',
        precioCompra: 5.5,
        precioVenta: 11.0,
        uniDisp: 110,
        uniVend: 60
      }
    ];
  }

  // Método para obtener todas las drogas
  getDrogas(): Droga[] {
    return this.drogas;
  }

  // Método para obtener una droga por su id
  getDrogaById(id: number): Droga | undefined {
    return this.drogas.find(droga => droga.id === id);
  }
}
