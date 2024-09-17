import { Mascota } from './mascota';  // Clase Mascota

export class Veterinario {
  id: number | null;  // El ID puede ser null si aún no está asignado
  mascotas: Mascota[];  // Relación de muchas mascotas (ManyToMany)
  cedula: string;
  nombre: string;
  contrasena: string;
  especialidad: string;
  urlFoto: string;
  numAtenciones: number;

  constructor(
    cedula: string,
    nombre: string,
    contrasena: string,
    especialidad: string,
    urlFoto: string,
    numAtenciones: number,
    id?: number,
    mascotas: Mascota[] = []
  ) {
    this.id = id || null;
    this.cedula = cedula;
    this.nombre = nombre;
    this.contrasena = contrasena;
    this.especialidad = especialidad;
    this.urlFoto = urlFoto;
    this.numAtenciones = numAtenciones;
    this.mascotas = mascotas;
  }

  // Getters y setters
  getId(): number | null {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }

  getMascotas(): Mascota[] {
    return this.mascotas;
  }

  setMascotas(mascotas: Mascota[]): void {
    this.mascotas = mascotas;
  }

  getCedula(): string {
    return this.cedula;
  }

  setCedula(cedula: string): void {
    this.cedula = cedula;
  }

  getNombre(): string {
    return this.nombre;
  }

  setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  getContrasena(): string {
    return this.contrasena;
  }

  setContrasena(contrasena: string): void {
    this.contrasena = contrasena;
  }

  getEspecialidad(): string {
    return this.especialidad;
  }

  setEspecialidad(especialidad: string): void {
    this.especialidad = especialidad;
  }

  getUrlFoto(): string {
    return this.urlFoto;
  }

  setUrlFoto(urlFoto: string): void {
    this.urlFoto = urlFoto;
  }

  getNumAtenciones(): number {
    return this.numAtenciones;
  }

  setNumAtenciones(numAtenciones: number): void {
    this.numAtenciones = numAtenciones;
  }
}
