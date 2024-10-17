import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinariosDsComponent } from './veterinarios-ds.component';

describe('VeterinariosDsComponent', () => {
  let component: VeterinariosDsComponent;
  let fixture: ComponentFixture<VeterinariosDsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeterinariosDsComponent]
    });
    fixture = TestBed.createComponent(VeterinariosDsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
