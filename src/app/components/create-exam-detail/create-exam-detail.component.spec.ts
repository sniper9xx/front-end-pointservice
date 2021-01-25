import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExamDetailComponent } from './create-exam-detail.component';

describe('CreateExamDetailComponent', () => {
  let component: CreateExamDetailComponent;
  let fixture: ComponentFixture<CreateExamDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateExamDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExamDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
