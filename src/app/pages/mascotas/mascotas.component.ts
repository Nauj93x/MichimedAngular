import { Component, OnInit, ViewChild } from '@angular/core';
import {ConfirmationService, MessageService, SelectItem } from 'primeng/api';
import { Mascota } from '../../model/mascota';
import { MascotaService } from '../../services/mascota.service';
import { Table } from 'primeng/table'
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class MascotasComponent implements OnInit {
  newMascotaDialog: boolean = false;
  viewMascotaDialog: boolean = false;

  mascotas: Mascota[] = [];

  mascota!: Mascota;

  selectedMascota!: Mascota;

  submitted: boolean = false;

  statuses!: SelectItem[];

  clientes: Cliente[] = [];

  clonedMascotas: { [s: string]: Mascota } = {};

  constructor(private mascotaService: MascotaService, private messageService: MessageService, private confirmationService: ConfirmationService, private ClienteService: ClienteService) {}

  ngOnInit(): void {
    this.mascotaService.getMascotas().subscribe(
      (mascotas) => this.mascotas = mascotas
    );

    this.statuses = [
      { label: 'En tratamiento', value: 'En tratamiento' },
      { label: 'Tratado', value: 'Tratado' },
    ];
  }

  deleteMascota(id: number, nombre: string): void {
    this.confirmationService.confirm({
      message: '¿Estas seguro que quieres eliminar a ' + nombre + '?',
      header: 'Confirmar eliminación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.mascotaService.deleteMascota(id);
        //Agregar nuevamente validación para eliminar mascota de la lista
        this.mascotas = this.mascotas.filter(mascota => mascota.id !== id);
        this.messageService.add({ severity: 'success', summary: '¡Exitoso!', detail: 'Mascota eliminada', life: 3000 });
      }
    });
  }

  getSeverity(status: string) {
    switch (status) {
        case 'En tratamiento':
            return 'info';
        case 'Tratado':
            return 'success';
        default:
            return 'info';
    }
  }

  onRowEditInit(mascota: Mascota) {
    this.clonedMascotas[mascota.id as number] = { ...mascota };
  }

  onRowEditSave(mascota: Mascota) {
    //PENDIENTE: Agregar validaciones para actualizar mascota
    this.mascotaService.updateMascota(mascota);
    this.messageService.add({ severity: 'success', summary: '¡Exitoso!', detail: 'Mascota actualizada' });
  }

  onRowEditCancel(mascota: Mascota, index: number) {
    this.mascotas[index] = this.clonedMascotas[mascota.id as number];
    delete this.clonedMascotas[mascota.id as number];
  }

  // Para filtrar
  @ViewChild('mascotasTable') mascotasTable: Table | undefined;
  applyFilterGlobal($event:any, stringVal:string) {
    this.mascotasTable?.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  //Para ver detalles de mascota
  openView(mascota: Mascota) {
    this.selectedMascota = mascota;
    this.viewMascotaDialog = true;
  }

  //Para crear una nueva mascota
  openNew() {
    this.mascota = {nombre: '', edad: 0, raza: '', peso: 0, enfermedad: '', estado: '', fechaEntrada: '', fechaSalida: '', medicamento: '', foto: ''};
    this.submitted = false;
    this.ClienteService.getClientes().subscribe(
      (clientes) => this.clientes = clientes
    )
    this.newMascotaDialog = true;
  }

  hideDialog() {
    this.newMascotaDialog = false;
    this.submitted = false;
  }

  saveMascota() {
    this.submitted = true;

    // Imagen por defecto
    // this.product.image = 'product-placeholder.svg';
    this.mascotaService.addMascota(this.mascota);
    this.messageService.add({ severity: 'success', summary: '¡Exitoso!', detail: 'Mascota creada', life: 3000 });
    this.mascotas.push(this.mascota);
    this.newMascotaDialog = false;
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
