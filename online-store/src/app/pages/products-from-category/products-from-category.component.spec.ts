import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsFromCategoryComponent } from './products-from-category.component';

describe('ProductsFromCategoryComponent', () => {
  let component: ProductsFromCategoryComponent;
  let fixture: ComponentFixture<ProductsFromCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsFromCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsFromCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
