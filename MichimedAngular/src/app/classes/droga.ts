import { Tratamiento } from './tratamiento';  // Clase Tratamiento

export class Droga {
  id: number | null;  // El id puede ser null cuando aún no se ha generado
  nombre: string;
  precioCompra: number;
  precioVenta: number;
  uniDisp: number;
  uniVend: number;
  tratamiento: Tratamiento | null;

  constructor(
    nombre: string,
    precioCompra: number,
    precioVenta: number,
    uniDisp: number,
    uniVend: number,
    id?: number,
    tratamiento?: Tratamiento
  ) {
    this.id = id || null;
    this.nombre = nombre;
    this.precioCompra = precioCompra;
    this.precioVenta = precioVenta;
    this.uniDisp = uniDisp;
    this.uniVend = uniVend;
    this.tratamiento = tratamiento || null;  // Tratamiento puede ser opcional
  }

  // Getters y setters 
  getId(): number | null {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }

  getNombre(): string {
    return this.nombre;
  }

  setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  getPrecioCompra(): number {
    return this.precioCompra;
  }

  setPrecioCompra(precioCompra: number): void {
    this.precioCompra = precioCompra;
  }

  getPrecioVenta(): number {
    return this.precioVenta;
  }

  setPrecioVenta(precioVenta: number): void {
    this.precioVenta = precioVenta;
  }

  getUniDisp(): number {
    return this.uniDisp;
  }

  setUniDisp(uniDisp: number): void {
    this.uniDisp = uniDisp;
  }

  getUniVend(): number {
    return this.uniVend;
  }

  setUniVend(uniVend: number): void {
    this.uniVend = uniVend;
  }

  getTratamiento(): Tratamiento | null {
    return this.tratamiento;
  }

  setTratamiento(tratamiento: Tratamiento): void {
    this.tratamiento = tratamiento;
  }
}
