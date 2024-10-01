import { Component, OnInit, ViewChild } from '@angular/core';
import {MessageService, SelectItem } from 'primeng/api';
import { Mascota } from '../../model/mascota';
import { MascotaService } from '../../services/mascota.service';
import { Table } from 'primeng/table'

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css', '../../app.component.css'],
  providers: [MessageService]
})
export class MascotasComponent implements OnInit {
  newMascotaDialog: boolean = false;

  mascotas: Mascota[] = [];

  mascota!: Mascota;

  submitted: boolean = false;

  statuses!: SelectItem[];

  clonedMascotas: { [s: string]: Mascota } = {};

  constructor(private mascotaService: MascotaService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.mascotaService.getMascotas().subscribe(
      (mascotas) => this.mascotas = mascotas
    );

    this.statuses = [
      { label: 'En tratamiento', value: 'En tratamiento' },
      { label: 'Tratado', value: 'Tratado' },
    ];
  }

  deleteMascota(id: number): void {
    this.mascotaService.deleteMascota(id);
    //Agregar nuevamente validación para eliminar mascota de la lista
    this.mascotas = this.mascotas.filter(mascota => mascota.id !== id);
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
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Mascota actualizada' });
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

  //Para crear una nueva mascota
  openNew() {
    this.mascota = {id: 0, nombre: '', edad: 0, raza: '', peso: 0, enfermedad: '', estado: '', fechaEntrada: '', fechaSalida: '', medicamento: '', foto: ''};
    this.submitted = false;
    this.newMascotaDialog = true;
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
