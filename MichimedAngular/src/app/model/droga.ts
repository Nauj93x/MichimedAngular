import { Tratamiento } from './tratamiento';  // Interfaz Tratamiento

export interface Droga {
  id: number | null;          // El id puede ser null si aún no está asignado
  nombre: string;             // Nombre de la droga
  precioCompra: number;       // Precio de compra
  precioVenta: number;        // Precio de venta
  uniDisp: number;            // Unidades disponibles
  uniVend: number;            // Unidades vendidas
  tratamiento: Tratamiento;   // Relación ManyToOne con Tratamiento
}
