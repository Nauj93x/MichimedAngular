export class User {
    email: string;
    password: string;

    // Constructor
  
    constructor(email: string, password: string) {
      this.email = email;
      this.password = password;
    }

    // Getters y setters
  
    getEmail(): string {
      return this.email;
    }
  
    setEmail(email: string): void {
      this.email = email;
    }
  
    getPassword(): string {
      return this.password;
    }
  
    setPassword(password: string): void {
      this.password = password;
    }
  }
  