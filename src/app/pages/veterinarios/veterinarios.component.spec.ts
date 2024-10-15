import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetrinariosComponent } from './veterinarios.component';

describe('VetrinariosComponent', () => {
  let component: VetrinariosComponent;
  let fixture: ComponentFixture<VetrinariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VetrinariosComponent]
    });
    fixture = TestBed.createComponent(VetrinariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
