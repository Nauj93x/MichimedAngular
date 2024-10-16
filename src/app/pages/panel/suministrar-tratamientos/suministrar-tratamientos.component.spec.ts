import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuministrarTratamientosComponent } from './suministrar-tratamientos.component';

describe('SuministrarTratamientosComponent', () => {
  let component: SuministrarTratamientosComponent;
  let fixture: ComponentFixture<SuministrarTratamientosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuministrarTratamientosComponent]
    });
    fixture = TestBed.createComponent(SuministrarTratamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
