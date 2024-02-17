import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapitreFormComponent } from './chapitre-form.component';

describe('ChapitreFormComponent', () => {
  let component: ChapitreFormComponent;
  let fixture: ComponentFixture<ChapitreFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChapitreFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChapitreFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
