import { Component, OnInit, ViewChild } from '@angular/core';
import {ConfirmationService, MessageService } from 'primeng/api';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { Table } from 'primeng/table'
import { Mascota } from 'src/app/model/mascota';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class ClientesComponent implements OnInit {

  loading: boolean = true;

  newClienteDialog: boolean = false;
  viewClienteDialog: boolean = false;

  clientes: Cliente[] = [];

  cliente!: Cliente;

  selectedCliente!: Cliente;

  submitted: boolean = false;

  clonedClientes: { [s: string]: Cliente } = {};

  mascotasCliente : Mascota[] = [];

  constructor(private clienteService: ClienteService, private messageService: MessageService, private confirmationService: ConfirmationService) {}

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(
      (clientes) => {
        this.clientes = clientes;
        this.loading = false;
      }
    );
  }

  deleteCliente(id: number, nombre: string): void {
    // Confirma y elimina un cliente
    this.confirmationService.confirm({
      message: '¿Estas seguro que quieres eliminar a ' + nombre + '?',
      header: 'Confirmar eliminación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.clienteService.deleteCliente(id);
        //Agregar nuevamente validación para eliminar cliente de la lista
        this.clientes = this.clientes.filter(cliente => cliente.id !== id);
        this.messageService.add({ severity: 'success', summary: '¡Exitoso!', detail: 'Cliente eliminado', life: 3000 });
      }
    });
  }

  onRowEditInit(cliente: Cliente) {
    this.clonedClientes[cliente.id as number] = { ...cliente };
  }

  onRowEditSave(cliente: Cliente) {
    //PENDIENTE: Agregar validaciones para actualizar cliente
    this.clienteService.updateCliente(cliente);
    this.messageService.add({ severity: 'success', summary: '¡Exitoso!', detail: 'Cliente actualizado' });
  }

  onRowEditCancel(cliente: Cliente, index: number) {
    this.clientes[index] = this.clonedClientes[cliente.id as number];
    delete this.clonedClientes[cliente.id as number];
  }

  // Para filtrar
  @ViewChild('clientesTable') clientesTable: Table | undefined;
  applyFilterGlobal($event:any, stringVal:string) {
    this.clientesTable?.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  //Para ver detalles de cliente
  openView(cliente: Cliente) {
    this.selectedCliente = cliente;
    if (this.selectedCliente.id !== undefined) {
      this.clienteService.getClienteMascotas(this.selectedCliente.id).subscribe(
        (mascotas) => this.mascotasCliente = mascotas.filter(mascota => mascota.estado !== 'Eliminada')
      );
    }
    this.viewClienteDialog = true;
  }

  //Para crear una nueva cliente
  openNew() {
    this.cliente = {cedula: '', nombre: '', email: '', contrasena: ''};
    this.submitted = false;
    this.newClienteDialog = true;
  }

  hideDialog() {
    this.newClienteDialog = false;
    this.submitted = false;
  }

  saveCliente() {
    this.submitted = true;

    if (this.cliente.nombre?.trim()
        && this.cliente.cedula?.trim()
        && this.cliente.email?.trim()) {
      this.clienteService.addCliente(this.cliente);
      this.messageService.add({ severity: 'success', summary: '¡Exitoso!', detail: 'Cliente creado', life: 3000 });
      this.clientes.push(this.cliente);
      this.newClienteDialog = false;
    }
  }

  exportExcel() {
    // import('xlsx').then((xlsx) => {
    //     const worksheet = xlsx.utils.json_to_sheet(this.products);
    //     const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
    //     const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
    //     this.saveAsExcelFile(excelBuffer, 'products');
    // });
  }
}
