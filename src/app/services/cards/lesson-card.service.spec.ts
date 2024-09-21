import { TestBed } from '@angular/core/testing';

import { LessonCardService } from './lesson-card.service';

describe('LessonCardService', () => {
  let service: LessonCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LessonCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
