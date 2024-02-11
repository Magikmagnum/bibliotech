import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteResumeComponent } from './carte-resume.component';

describe('CarteResumeComponent', () => {
  let component: CarteResumeComponent;
  let fixture: ComponentFixture<CarteResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarteResumeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarteResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
