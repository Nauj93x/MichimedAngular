import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrogasComponent } from './drogas.component';

describe('DrogasComponent', () => {
  let component: DrogasComponent;
  let fixture: ComponentFixture<DrogasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrogasComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrogasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
