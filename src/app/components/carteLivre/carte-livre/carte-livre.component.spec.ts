import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteLivreComponent } from './carte-livre.component';

describe('CarteLivreComponent', () => {
  let component: CarteLivreComponent;
  let fixture: ComponentFixture<CarteLivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarteLivreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarteLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
