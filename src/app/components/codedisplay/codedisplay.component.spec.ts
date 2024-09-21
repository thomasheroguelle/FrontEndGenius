import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodedisplayComponent } from './codedisplay.component';

describe('CodedisplayComponent', () => {
  let component: CodedisplayComponent;
  let fixture: ComponentFixture<CodedisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodedisplayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CodedisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
