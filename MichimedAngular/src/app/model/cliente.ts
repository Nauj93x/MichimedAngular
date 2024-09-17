export class Cliente {
    id: number | null;  // El id puede ser nulo inicialmente
    cedula: string;
    nombre: string;
    email: string;
    contrasena: string;
    mascotas: Mascota[];  // Suponemos que tienes una clase o interfaz Mascota
  
    // Constructor con ID
    constructor(
      cedula: string,
      nombre: string,
      email: string,
      contrasena: string,
      id?: number,           // `id` es opcional
      mascotas: Mascota[] = []  // Inicializa mascotas como un array vacío
    ) {
      this.id = id || null;  // Si no se pasa ID, será null
      this.cedula = cedula;
      this.nombre = nombre;
      this.email = email;
      this.contrasena = contrasena;
      this.mascotas = mascotas;
    }
  
    // Constructor sin ID
    static sinId(cedula: string, nombre: string, email: string, contrasena: string): Cliente {
      return new Cliente(cedula, nombre, email, contrasena);
    }
  
    // Getters y setters (Opcional en TypeScript, puedes acceder directamente a las propiedades)
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
  }
  