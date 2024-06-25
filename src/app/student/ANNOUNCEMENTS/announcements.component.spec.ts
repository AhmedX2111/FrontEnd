import { ComponentFixture, TestBed } from '@angular/core/testing';

import { announcementsComponent } from './announcements.component';

describe('CGPACalculatorComponent', () => {
  let component: announcementsComponent;
  let fixture: ComponentFixture<announcementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [announcementsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(announcementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
