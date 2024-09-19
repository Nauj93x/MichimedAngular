import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotaService } from '../../../services/mascota.service';
import { Mascota } from '../../../model/mascota';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css','../mascotas.component.css', '../../../app.component.css']
})
export class UpdateComponent implements OnInit {
  mascotaForm: FormGroup;
  mascotaId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
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

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.mascotaId = Number(params.get('id'));
      const mascota = this.mascotaService.getMascotaById(this.mascotaId);
      if (mascota) {
        this.mascotaForm.patchValue(mascota);
      }
    });
  }

  onSubmit(): void {
    if (this.mascotaForm.valid && this.mascotaId !== null) {
      const updatedMascota: Mascota = { ...this.mascotaForm.value, id: this.mascotaId };
      this.mascotaService.updateMascota(updatedMascota);
      this.router.navigate(['/mascotas']);
    }
  }
}
