import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../../services/mascota.service';
import { Mascota } from '../../model/mascota';

@Component({
  selector: 'app-seleccion-mascotas',
  templateUrl: './seleccion-mascotas.component.html',
  styleUrls: ['./seleccion-mascotas.component.css']
})
export class SeleccionMascotasComponent implements OnInit {

  gatos: Mascota[] = [];
  gatosFiltrados: Mascota[] = [];
  gatosDisponibles: any[] = [];
  isLoading = true;
  errorMessage = '';
  selectedGato: any = null; // Cambiado a `any` para manejar el valor del dropdown correctamente
  stepperVisible: boolean = false;
  activeStep: number = 0;
  steps: any[] = [];

  // Variables para los datos del adoptante
  nombreAdoptante: string = '';
  telefonoAdoptante: string = '';

  constructor(private mascotaService: MascotaService) { }

  ngOnInit(): void {
    this.fetchMascotas();
    this.steps = [
      { label: 'Información del Adoptante' },
      { label: 'Confirmación' },
      { label: 'Completar' }
    ];
  }

  fetchMascotas(): void {
    this.mascotaService.getMascotas().subscribe(
      (data: Mascota[]) => {
        this.gatos = data;
        this.gatosFiltrados = [...this.gatos];

        this.gatosDisponibles = this.gatos
          .filter(gato => gato.estado === 'Disponible')
          .map(gato => ({ label: gato.nombre, value: gato })); // Aquí `value` es el objeto completo de `gato`

        this.isLoading = false;
      },
      (error) => {
        console.error('Error al cargar las mascotas:', error);
        this.errorMessage = 'Ocurrió un error al cargar las mascotas. Intenta de nuevo más tarde.';
        this.isLoading = false;
      }
    );
  }

  abrirStepper(gato: Mascota): void {
    this.selectedGato = gato;
    this.stepperVisible = true;
    this.activeStep = 0;
  }

  siguientePaso(): void {
    if (this.activeStep === 0 && (!this.nombreAdoptante.trim() || !this.telefonoAdoptante.trim())) {
      alert('Por favor, completa ambos campos para continuar.');
      return;
    }
  
    if (this.activeStep < this.steps.length - 1) {
      this.activeStep++;
    }
  }

  pasoAnterior(): void {
    if (this.activeStep > 0) {
      this.activeStep--;
    }
  }

  cerrarStepper(): void {
    this.stepperVisible = false;
    this.selectedGato = null;
    this.gatosFiltrados = [...this.gatos];
  }

  onSelectGato(): void {
    if (this.selectedGato && this.selectedGato.value) {
      // Filtrar la lista para mostrar solo el gato seleccionado basado en el objeto `value` de `selectedGato`
      this.gatosFiltrados = this.gatos.filter(gato => gato.nombre === this.selectedGato.value.nombre);
    } else {
      // Si no hay gato seleccionado, mostrar todos los gatos
      this.gatosFiltrados = [...this.gatos];
    }
  }
  
  cancelarBusqueda(): void {
    this.selectedGato = null;  // Limpiar el valor seleccionado en el dropdown
    this.gatosFiltrados = [...this.gatos]; // Restaurar la lista completa de gatos
  }

  allowOnlyNumbers(event: KeyboardEvent): void {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }
}
