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

  constructor(
    private http: HttpClient // Importa HttpClient
  ) {}

  // Método para obtener todos los clientes
  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>('http://localhost:8090/clientes');
  }

  // Método para obtener un cliente por su id
  getClienteById(id: number): Observable<Cliente> {
    return this.http.get<Cliente>('http://localhost:8090/clientes/' + id);
  }

  getClienteMascotas(id:number): Observable<Mascota[]> {
    return this.http.get<Mascota[]>('http://localhost:8090/clientes/mascotas/' + id);
  }

  //Metodo para relacionar una Mascota
  addMascota(id: number, mascota:Mascota){
    return this.http.post('http://localhost:8090/clientes/' + id + '/mascotas', mascota);
  }

  // Método para agregar una nueva cliente
  addCliente(cliente: Cliente) {
    this.http.post('http://localhost:8090/clientes/add', cliente).subscribe();
  }

  // Método para actualizar una cliente existente
  updateCliente(updatedCliente: Cliente) {
    this.http.put('http://localhost:8090/clientes/update', updatedCliente).subscribe();
  }

  // Método para eliminar una cliente por su id
  deleteCliente(id: number) {
    this.http.delete('http://localhost:8090/clientes/delete/' + id).subscribe();
  }
}
