import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseUploadsComponent } from './course-uploads.component';

describe('CourseUploadsComponent', () => {
  let component: CourseUploadsComponent;
  let fixture: ComponentFixture<CourseUploadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseUploadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseUploadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
