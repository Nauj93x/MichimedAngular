import { Component, OnInit } from '@angular/core';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent implements OnInit {
  loading$ = this.loadingService.loading$;

  constructor(private loadingService: LoadingService) {}

  ngOnInit() {
    this.loadingService.show();
    // Simula la carga de datos
    setTimeout(() => {
      this.loadingService.hide();
    }, 0); // Simula un retraso de 2 segundos
  }
}
