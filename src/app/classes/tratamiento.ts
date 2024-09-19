import { Mascota } from './mascota';  // Clase Mascota
import { Veterinario } from './veterinario';  // Clase Veterinario
import { Droga } from './droga';  // Clase Droga

export class Tratamiento {
  id: number | null;  // El ID puede ser null si aún no está definido
  mascota: Mascota | null;  // Relación con la clase Mascota
  veterinario: Veterinario | null;  // Relación con la clase Veterinario
  drogas: Droga[];  // Lista de drogas asociadas
  fecha: string;

  constructor(fecha: string, id?: number, mascota?: Mascota, veterinario?: Veterinario, drogas: Droga[] = []) {
    this.id = id || null;
    this.mascota = mascota || null;
    this.veterinario = veterinario || null;
    this.drogas = drogas;
    this.fecha = fecha;
  }

  // Getters y setters
  getId(): number | null {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }

  getMascota(): Mascota | null {
    return this.mascota;
  }

  setMascota(mascota: Mascota): void {
    this.mascota = mascota;
  }

  getVeterinario(): Veterinario | null {
    return this.veterinario;
  }

  setVeterinario(veterinario: Veterinario): void {
    this.veterinario = veterinario;
  }

  getFecha(): string {
    return this.fecha;
  }

  setFecha(fecha: string): void {
    this.fecha = fecha;
  }

  getDrogas(): Droga[] {
    return this.drogas;
  }

  setDrogas(drogas: Droga[]): void {
    this.drogas = drogas;
  }
}
