import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDescriptionFormComponent } from './job-description-form.component';

describe('AddOfferJobDescriptionComponent', () => {
  let component: JobDescriptionFormComponent;
  let fixture: ComponentFixture<JobDescriptionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobDescriptionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDescriptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
