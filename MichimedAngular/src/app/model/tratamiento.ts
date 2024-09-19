import { Mascota } from './mascota';        // Interfaz Mascota
import { Veterinario } from './veterinario'; // Interfaz Veterinario
import { Droga } from './droga';             // Interfaz Droga

export interface Tratamiento {
  id: number | null;          // El id puede ser null si aún no está asignado
  fecha: string;              // Fecha del tratamiento
  mascota: Mascota | null;    // Relación ManyToOne con Mascota
  veterinario: Veterinario | null; // Relación ManyToOne con Veterinario
  drogas: Droga[];            // Relación OneToMany con Droga
}
