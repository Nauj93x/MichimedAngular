import { Mascota } from './mascota';  // Interfaz Mascota

export interface Veterinario {
  id: number | null;         // El id puede ser null si aún no está asignado
  cedula: string;            // Cédula del veterinario
  nombre: string;            // Nombre del veterinario
  contrasena: string;        // Contraseña del veterinario
  especialidad: string;      // Especialidad del veterinario
  urlFoto: string;           // URL de la foto del veterinario
  numAtenciones: number;     // Número de atenciones del veterinario
  mascotas: Mascota[];       // Relación ManyToMany con Mascota
}
