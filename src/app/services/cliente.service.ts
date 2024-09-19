import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';  // Interfaz Cliente 

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private clientes: Cliente[] = [];

  constructor() {
    // Datos quemados de clientes
    this.clientes = [
      {
        id: 1,
        cedula: '1234567890',
        nombre: 'Juan Pérez',
        email: 'juan@example.com',
        contrasena: 'password123',
        mascotas: []  
      },
      {
        id: 2,
        cedula: '0987654321',
        nombre: 'Ana López',
        email: 'ana@example.com',
        contrasena: 'password456',
        mascotas: []
      },
      {
        id: 3,
        cedula: '9876543210',
        nombre: 'Carlos García',
        email: 'carlos@example.com',
        contrasena: 'password789',
        mascotas: []
      },
      {
        id: 4,
        cedula: '8765432109',
        nombre: 'María Rodríguez',
        email: 'maria@example.com',
        contrasena: 'password987',
        mascotas: []
      },
      {
        id: 5,
        cedula: '7654321098',
        nombre: 'Luis Martínez',
        email: 'luis@example.com',
        contrasena: 'password654',
        mascotas: []
      },
      {
        id: 6,
        cedula: '6543210987',
        nombre: 'Sofía Hernández',
        email: 'sofia@example.com',
        contrasena: 'password321',
        mascotas: []
      },
      {
        id: 7,
        cedula: '5432109876',
        nombre: 'Pedro Ramírez',
        email: 'pedro@example.com',
        contrasena: 'password111',
        mascotas: []
      }
    ];
  }

  // Método para obtener todos los clientes
  getClientes(): Cliente[] {
    return this.clientes;
  }

  // Método para obtener un cliente por su id
  getClienteById(id: number): Cliente | undefined {
    return this.clientes.find(cliente => cliente.id === id);
  }
}
