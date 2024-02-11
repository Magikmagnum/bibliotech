import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteLireComponent } from './carte-lire.component';

describe('CarteLireComponent', () => {
  let component: CarteLireComponent;
  let fixture: ComponentFixture<CarteLireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarteLireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarteLireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
