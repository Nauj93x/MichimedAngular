import { Cliente } from './cliente';  // Clase Cliente 
import { Veterinario } from './veterinario';  // Clase Veterinario

export class Mascota {
  id: number | null;  // El id puede ser null si aún no está definido
  nombre: string;
  edad: number;
  raza: string;
  peso: number;
  enfermedad: string;
  estado: string;
  fechaEntrada: string;
  fechaSalida: string;
  medicamento: string;
  foto: string;
  cliente: Cliente | null;  // Relación con la clase Cliente
  veterinarios: Veterinario[];  // Relación con la clase Veterinario

  constructor(
    nombre: string,
    edad: number,
    raza: string,
    peso: number,
    enfermedad: string,
    estado: string,
    fechaEntrada: string,
    fechaSalida: string,
    medicamento: string,
    foto: string,
    id?: number,
    cliente?: Cliente,
    veterinarios: Veterinario[] = []
  ) {
    this.id = id || null;
    this.nombre = nombre;
    this.edad = edad;
    this.raza = raza;
    this.peso = peso;
    this.enfermedad = enfermedad;
    this.estado = estado;
    this.fechaEntrada = fechaEntrada;
    this.fechaSalida = fechaSalida;
    this.medicamento = medicamento;
    this.foto = foto;
    this.cliente = cliente || null;
    this.veterinarios = veterinarios;
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

  getEdad(): number {
    return this.edad;
  }

  setEdad(edad: number): void {
    this.edad = edad;
  }

  getRaza(): string {
    return this.raza;
  }

  setRaza(raza: string): void {
    this.raza = raza;
  }

  getPeso(): number {
    return this.peso;
  }

  setPeso(peso: number): void {
    this.peso = peso;
  }

  getEnfermedad(): string {
    return this.enfermedad;
  }

  setEnfermedad(enfermedad: string): void {
    this.enfermedad = enfermedad;
  }

  getEstado(): string {
    return this.estado;
  }

  setEstado(estado: string): void {
    this.estado = estado;
  }

  getFechaEntrada(): string {
    return this.fechaEntrada;
  }

  setFechaEntrada(fechaEntrada: string): void {
    this.fechaEntrada = fechaEntrada;
  }

  getFechaSalida(): string {
    return this.fechaSalida;
  }

  setFechaSalida(fechaSalida: string): void {
    this.fechaSalida = fechaSalida;
  }

  getMedicamento(): string {
    return this.medicamento;
  }

  setMedicamento(medicamento: string): void {
    this.medicamento = medicamento;
  }

  getFoto(): string {
    return this.foto;
  }

  setFoto(foto: string): void {
    this.foto = foto;
  }

  getCliente(): Cliente | null {
    return this.cliente;
  }

  setCliente(cliente: Cliente): void {
    this.cliente = cliente;
  }

  getVeterinarios(): Veterinario[] {
    return this.veterinarios;
  }

  setVeterinarios(veterinarios: Veterinario[]): void {
    this.veterinarios = veterinarios;
  }
}
