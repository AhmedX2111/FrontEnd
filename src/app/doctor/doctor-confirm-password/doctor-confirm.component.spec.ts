import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorConfirmComponent } from './doctor-confirm.component';

describe('DoctorConfirmComponent', () => {
  let component: DoctorConfirmComponent;
  let fixture: ComponentFixture<DoctorConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorConfirmComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
