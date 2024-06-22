import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CGPACalculatorComponent } from './gpa.component';

describe('CGPACalculatorComponent', () => {
  let component: CGPACalculatorComponent;
  let fixture: ComponentFixture<CGPACalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CGPACalculatorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CGPACalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
