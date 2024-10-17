import { Component, OnInit } from '@angular/core';
import { Droga } from 'src/app/model/droga';
import { DrogaService } from 'src/app/services/drogas.service';

@Component({
  selector: 'app-profit',
  templateUrl: './profit.component.html',
  styleUrls: ['./profit.component.css']
})
export class ProfitComponent implements OnInit {
  drogas: Droga[] = [];
  ganancias: number = 0;
  gananciasPorDroga: { [key: string]: number } = {};

  constructor(private drogaService: DrogaService) {}

  ngOnInit() {
    this.drogaService.getDrogas().subscribe((data) => {
      this.drogas = data;
      this.calcularGanancias();
    });
  }

  calcularGanancias() {
    this.ganancias = this.drogas.reduce((total, droga) => {
      const gananciaDroga = (droga.precioVenta * droga.uniVend) - (droga.precioCompra * droga.uniVend);
      this.gananciasPorDroga[droga.nombre] = gananciaDroga;
      return total + gananciaDroga;
    }, 0);
  }
}
