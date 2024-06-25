import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentConfirmComponent } from './student-confirm.component';

describe('StudentConfirmComponent', () => {
  let component: StudentConfirmComponent;
  let fixture: ComponentFixture<StudentConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentConfirmComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
