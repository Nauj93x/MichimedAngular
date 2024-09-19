import { Cliente } from './cliente';  // Interfaz Cliente
import { Veterinario } from './veterinario';  // Interfaz Veterinario

export interface Mascota {
  id: number | null;         // El id puede ser null si aún no está asignado
  nombre: string;            // Nombre de la mascota
  edad: number;              // Edad de la mascota
  raza: string;              // Raza de la mascota
  peso: number;              // Peso de la mascota
  enfermedad: string;        // Enfermedad de la mascota
  estado: string;            // Estado de la mascota, filtrado por "Eliminada"
  fechaEntrada: string;      // Fecha de entrada
  fechaSalida: string;       // Fecha de salida
  medicamento: string;       // Medicamento de la mascota
  foto: string;              // Foto de la mascota (límite de 500 caracteres)
  cliente: Cliente;          // Relación ManyToOne con Cliente
  veterinarios: Veterinario[];  // Relación ManyToMany con Veterinario
}
