import { Component, OnInit } from '@angular/core';
import { Droga } from 'src/app/model/droga';
import { DrogaService } from 'src/app/services/drogas.service';

@Component({
  selector: 'app-drogas-aux-table',
  templateUrl: './drogas-aux-table.component.html',
  styleUrls: ['./drogas-aux-table.component.css']
})
export class DrogasAuxTableComponent implements OnInit {
  drogas: Droga[] = [];

  constructor(private drogaService: DrogaService) {}

  ngOnInit() {
    this.drogaService.getDrogas().subscribe((data) => {
      this.drogas = data;
    });
  }

  getDisponibilidad(uniDisp: number): string {
    if (uniDisp <= 2) {
      return 'Reabastecer';
    } else if (uniDisp < 5) {
      return 'Escaso';
    } else if (uniDisp >= 8) {
      return 'Abundante';
    } else {
      return 'Normal';
    }
  }

  getDisponibilidadClass(uniDisp: number): string {
    if (uniDisp <= 2) {
      return 'reabastecer';
    } else if (uniDisp < 5) {
      return 'escaso';
    } else if (uniDisp >= 8) {
      return 'abundante';
    } else {
      return 'normal';
    }
  }
}
