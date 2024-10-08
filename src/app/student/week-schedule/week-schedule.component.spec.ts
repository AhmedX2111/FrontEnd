import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekScheduleComponent } from './week-schedule.component';

describe('WeekScheduleComponent', () => {
  let component: WeekScheduleComponent;
  let fixture: ComponentFixture<WeekScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekScheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
