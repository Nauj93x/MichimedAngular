import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class DrogaService {

  constructor() {}

  // Método para procesar el archivo Excel en el cliente usando la librería XLSX
  cargarMedicamentos(file: File): Observable<any[]> {
    return new Observable((observer) => {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });

        // Procesar la primera hoja del archivo
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        // Convertir la data a un formato más usable
        const formattedData = this.convertData(jsonData);
        observer.next(formattedData);
        observer.complete();
      };

      reader.onerror = (error) => {
        observer.error('Error al procesar el archivo.');
      };

      reader.readAsArrayBuffer(file);
    });
  }

  // Convertir los datos a un formato específico
  private convertData(data: any[]): any[] {
    const formattedData: any[] = [];
    let idCounter = 1;
    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      if (row && row.length > 0) {
        formattedData.push({
          id: idCounter++,
          nombre: row[0],
          precioCompra: row[1],
          precioVenta: row[2],
          uniDisp: row[3],
          uniVend: row[4]
        });
      }
    }
    return formattedData;
  }
}
