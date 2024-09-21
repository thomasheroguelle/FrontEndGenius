import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonCardDetailComponent } from './lesson-card-detail.component';

describe('LessonCardDetailComponent', () => {
  let component: LessonCardDetailComponent;
  let fixture: ComponentFixture<LessonCardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonCardDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LessonCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
