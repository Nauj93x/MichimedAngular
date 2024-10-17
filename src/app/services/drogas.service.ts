import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import * as XLSX from 'xlsx';
import { Droga } from '../model/droga';

@Injectable({
  providedIn: 'root',
})
export class DrogaService {
  constructor(
    private http: HttpClient // Importa HttpClient
  ) {}

  getDrogas(): Observable<Droga[]> {
    return this.http.get<Droga[]>('http://localhost:8090/drogas');
  }

  addDrogas(drogas: Droga[]) :  Observable<Droga[]> {
    return this.http
      .post<Droga[]>('http://localhost:8090/drogas/add', drogas);
  }

  // Método para procesar el archivo Excel en el cliente usando la librería XLSX
  cargarMedicamentos(file: File): Observable<any[]> {
    return new Observable((observer) => {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });

        // Procesar la primera hoja del archivo
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, {
          header: 1,
        }) as any[];

        // Validar las cabeceras del archivo Excel
        const headers = jsonData[0]; // Primera fila (las cabeceras)

        const expectedHeaders = [
          'Nombre',
          'Precio Compra',
          'Precio Venta',
          'Unidades Disponibles',
          'Unidades Vendidas',
        ];

        // Verificar que las cabeceras coincidan
        const headersValid = this.validateHeaders(headers, expectedHeaders);

        if (!headersValid) {
          observer.error('El archivo Excel no tiene las columnas correctas.');
          return;
        }

        // Convertir la data si las cabeceras son válidas
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

  // Método para validar que las cabeceras sean las correctas
  private validateHeaders(headers: any[], expectedHeaders: string[]): boolean {
    // Normalizar las cabeceras y las esperadas (pasarlas a minúsculas)
    const normalizedHeaders = headers.map((header) =>
      header.toString().toLowerCase()
    );
    const normalizedExpectedHeaders = expectedHeaders.map((header) =>
      header.toLowerCase()
    );

    // Verificar que las cabeceras normalizadas incluyan todas las esperadas
    return normalizedExpectedHeaders.every((header) =>
      normalizedHeaders.includes(header)
    );
  }

  // Convertir los datos a un formato específico
  private convertData(data: any[]): any[] {
    const formattedData: any[] = [];
    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      if (row && row.length > 0) {
        formattedData.push({
          nombre: row[0],
          precioCompra: row[1],
          precioVenta: row[2],
          uniDisp: row[3],
          uniVend: row[4],
        });
      }
    }
    return formattedData;
  }
}
