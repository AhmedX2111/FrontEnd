import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentResetComponent } from './student-reset.component';

describe('StudentResetComponent', () => {
  let component: StudentResetComponent;
  let fixture: ComponentFixture<StudentResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentResetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
