import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorResetComponent } from './doctor-reset.component';

describe('DoctorResetComponent', () => {
  let component: DoctorResetComponent;
  let fixture: ComponentFixture<DoctorResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorResetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
