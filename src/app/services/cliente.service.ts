// Importaciones necesarias
import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';  // Interfaz Cliente
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mascota } from '../model/mascota';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private clientes: Cliente[] = [];

  constructor(private http: HttpClient) {}

  // Método para obtener todos los clientes
  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>('http://localhost:8090/clientes');
  }

  // Método para obtener un cliente por su id
  getClienteById(id: number): Observable<Cliente> {
    return this.http.get<Cliente>('http://localhost:8090/clientes/' + id);
  }

  // Método para obtener las mascotas de un cliente por su id
  getClienteMascotas(clienteId: number): Observable<Mascota[]> {
    // Aquí haces la llamada HTTP a tu backend para obtener las mascotas
    return this.http.get<Mascota[]>(`http://localhost:8090/clientes/${clienteId}/mascotas`);
  }

  // Método para agregar un nuevo cliente
  addCliente(cliente: Cliente) {
    this.http.post('http://localhost:8090/clientes/add', cliente).subscribe();
  }

  // Método para actualizar un cliente existente
  updateCliente(updatedCliente: Cliente) {
    this.http.put('http://localhost:8090/clientes/update', updatedCliente).subscribe();
  }

  // Método para eliminar un cliente por su id
  deleteCliente(id: number) {
    this.http.delete('http://localhost:8090/clientes/delete/' + id).subscribe();
  }
}
