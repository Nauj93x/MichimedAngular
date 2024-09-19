import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mascota-form',
  templateUrl: './mascota-form.component.html',
  styleUrls: ['../../../../pages/mascotas/mascotas.component.css', '../../../../app.component.css']
})
export class MascotaFormComponent {
  @Input() mascotaForm!: FormGroup;
  @Output() formSubmit = new EventEmitter<void>();

  onSubmit(): void {
    this.formSubmit.emit();
  }
}
