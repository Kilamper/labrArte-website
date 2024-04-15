import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCartComponent } from './category-cart.component';

describe('CategoryCartComponent', () => {
  let component: CategoryCartComponent;
  let fixture: ComponentFixture<CategoryCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
