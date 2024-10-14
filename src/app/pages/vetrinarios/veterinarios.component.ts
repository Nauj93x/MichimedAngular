import { Table } from 'primeng/table'
import { Mascota } from 'src/app/model/mascota';
import { Component, OnInit, ViewChild } from '@angular/core';
import {ConfirmationService, MessageService } from 'primeng/api';
import { Veterinario } from 'src/app/model/veterinario';
import { VeterinarioService } from 'src/app/services/veterinario.service';

@Component({
  selector: 'app-vetrinarios',
  templateUrl: './veterinarios.component.html',
  styleUrls: ['./veterinarios.component.css'],
  providers: [MessageService, ConfirmationService]

})
export class VetrinariosComponent implements OnInit {
  newVeterinarioDialog: boolean = false;
  viewVeterinarioDialog: boolean = false;

  veterinarios: Veterinario[] = [];

  veterinario!: Veterinario;

  selectedVeterinario!: Veterinario;

  submitted: boolean = false;

  clonedVeterinarios: { [s: string]: Veterinario} = {};

  mascotasVeterinario : Mascota[] = [];

  constructor(private veterinarioService: VeterinarioService, private messageService: MessageService, private confirmationService: ConfirmationService) {}

  ngOnInit(): void {
    this.veterinarioService.getVeterinarios().subscribe(
      (veterinarios) => this.veterinarios = veterinarios
    );
  }

  deleteVeterinario(id: number, nombre: string): void {
    this.confirmationService.confirm({
      message: '¿Estas seguro que quieres eliminar a ' + nombre + '?',
      header: 'Confirmar eliminación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.veterinarioService.deleteVeterinario(id);
        //Agregar nuevamente validación para eliminar veterinario de la lista
        this.veterinarios = this.veterinarios.filter(veterinario => veterinario.id !== id);
        this.messageService.add({ severity: 'success', summary: '¡Exitoso!', detail: 'veterinario eliminado', life: 3000 });
      }
    });
  }

  onRowEditInit(veterinario: Veterinario) {
    this.clonedVeterinarios[veterinario.id as number] = { ...veterinario };
  }

  onRowEditSave(veterinario: Veterinario) {
    //PENDIENTE: Agregar validaciones para actualizar veterinario
    this.veterinarioService.updateVeterinario(veterinario);
    this.messageService.add({ severity: 'success', summary: '¡Exitoso!', detail: 'veterinario actualizado' });
  }

  onRowEditCancel(veterinario: Veterinario, index: number) {
    this.veterinarios[index] = this.clonedVeterinarios[veterinario.id as number];
    delete this.clonedVeterinarios[veterinario.id as number];
  }

  // Para filtrar
  @ViewChild('veterinariosTable') veterinariosTable: Table | undefined;
  applyFilterGlobal(event: any, stringVal: string) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.veterinariosTable?.filterGlobal(filterValue, stringVal);
  }

  //Para ver detalles de veterinario
  openView(veterinario: Veterinario) {
    this.selectedVeterinario = veterinario;
    this.viewVeterinarioDialog = true;
    if (this.selectedVeterinario.id !== undefined && this.selectedVeterinario.id !== null) {
      this.veterinarioService.getVeterinarioMascotas(this.selectedVeterinario.id).subscribe(
        (mascotas) => this.mascotasVeterinario = mascotas
      );
    }
  }

  //Para crear una nueva veterinario
  openNew() {
    this.veterinario = {cedula: '', nombre: '', especialidad: '', contrasena: '', urlFoto:''};
    this.submitted = false;
    this.newVeterinarioDialog = true;
  }

  hideDialog() {
    this.newVeterinarioDialog = false;
    this.submitted = false;
  }

  saveVeterinario() {
    this.submitted = true;

    if (this.veterinario && this.veterinario.nombre?.trim()
        && this.veterinario.cedula?.trim()
        && this.veterinario.especialidad?.trim()) {
      this.veterinarioService.addVeterinario(this.veterinario);
      this.messageService.add({ severity: 'success', summary: '¡Exitoso!', detail: 'veterinario creado', life: 3000 });
      this.veterinarios.push(this.veterinario);
      this.newVeterinarioDialog = false;
    }
  }

  openEdit(veterinario: Veterinario) {
    this.veterinario = { ...veterinario }; // Create a copy of the selected veterinarian
    this.submitted = false; // Reset the submitted flag
  }

}
