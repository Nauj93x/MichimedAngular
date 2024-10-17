import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrogasAuxTableComponent } from './drogas-aux-table.component';

describe('DrogasAuxTableComponent', () => {
  let component: DrogasAuxTableComponent;
  let fixture: ComponentFixture<DrogasAuxTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrogasAuxTableComponent]
    });
    fixture = TestBed.createComponent(DrogasAuxTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
