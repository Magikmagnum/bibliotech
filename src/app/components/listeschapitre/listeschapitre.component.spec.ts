import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeschapitreComponent } from './listeschapitre.component';

describe('ListeschapitreComponent', () => {
  let component: ListeschapitreComponent;
  let fixture: ComponentFixture<ListeschapitreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeschapitreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeschapitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
