import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionMascotasComponent } from './seleccion-mascotas.component';

describe('SeleccionMascotasComponent', () => {
  let component: SeleccionMascotasComponent;
  let fixture: ComponentFixture<SeleccionMascotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeleccionMascotasComponent]
    });
    fixture = TestBed.createComponent(SeleccionMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
