import { Component, OnInit } from '@angular/core';
import { Droga } from 'src/app/model/droga';
import { DrogaService } from 'src/app/services/drogas.service';

@Component({
  selector: 'app-profit',
  templateUrl: './profit.component.html',
  styleUrls: ['./profit.component.css']
})
export class ProfitComponent implements OnInit {
  drogas: Droga[] = []; // Almacenar las drogas
  ganancias: number = 0; // Total ganancias
  gananciasPorDroga: { [key: string]: number } = {}; // Ganancias por cada droga

  constructor(private drogaService: DrogaService) {}

  ngOnInit() {
    this.drogaService.getDrogas().subscribe((data) => {
      this.drogas = data;
      this.calcularGanancias();
    });
  }

  calcularGanancias() {
    // Calcula las ganancias totales y por cada droga
    this.ganancias = this.drogas.reduce((total, droga) => {
      const gananciaDroga = (droga.precioVenta * droga.uniVend) - (droga.precioCompra * (droga.uniVend + droga.uniDisp));
      this.gananciasPorDroga[droga.nombre] = gananciaDroga; // Almacena la ganancia por droga
      return total + gananciaDroga;
    }, 0);
  }
}
