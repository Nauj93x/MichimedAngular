import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialMedicoComponent } from './historial-medico.component';

describe('HistorialMedicoComponent', () => {
  let component: HistorialMedicoComponent;
  let fixture: ComponentFixture<HistorialMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistorialMedicoComponent]
    });
    fixture = TestBed.createComponent(HistorialMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
