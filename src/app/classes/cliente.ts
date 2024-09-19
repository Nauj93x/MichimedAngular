import { Mascota } from './mascota';  // Clase Mascota

export class Cliente {
  id: number | null;  // El id puede ser null si aún no está asignado
  cedula: string;
  nombre: string;
  email: string;
  contrasena: string;
  mascotas: Mascota[];  // Relación OneToMany con Mascota

  constructor(
    cedula: string,
    nombre: string,
    email: string,
    contrasena: string,
    id?: number,
    mascotas: Mascota[] = []
  ) {
    this.id = id || null;
    this.cedula = cedula;
    this.nombre = nombre;
    this.email = email;
    this.contrasena = contrasena;
    this.mascotas = mascotas;
  }

  // Getters y setters
  getId(): number | null {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
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

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  getContrasena(): string {
    return this.contrasena;
  }

  setContrasena(contrasena: string): void {
    this.contrasena = contrasena;
  }

  getMascotas(): Mascota[] {
    return this.mascotas;
  }

  setMascotas(mascotas: Mascota[]): void {
    this.mascotas = mascotas;
  }
}
