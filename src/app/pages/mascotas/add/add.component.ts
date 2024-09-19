import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MascotaService } from '../../../services/mascota.service';
import { Mascota } from '../../../model/mascota';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css','../mascotas.component.css', '../../../app.component.css']
})
export class AddComponent implements OnInit {
  mascotaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private mascotaService: MascotaService,
    private router: Router
  ) {
    this.mascotaForm = this.fb.group({
      nombre: ['', Validators.required],
      enfermedad: [''],
      raza: ['', Validators.required],
      peso: ['', [Validators.required, Validators.min(0)]],
      foto: [''],
      estado: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(0)]],
      medicamento: [''],
      fechaEntrada: [''],
      fechaSalida: [''],
      id: ['']
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.mascotaForm.valid) {
      const nuevaMascota: Mascota = this.mascotaForm.value;
      this.mascotaService.addMascota(nuevaMascota);
      this.router.navigate(['/mascotas']);
    }
  }
}
