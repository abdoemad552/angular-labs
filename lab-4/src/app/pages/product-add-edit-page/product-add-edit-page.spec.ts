import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddEditPage } from './product-add-edit-page';

describe('ProductAddEditPage', () => {
  let component: ProductAddEditPage;
  let fixture: ComponentFixture<ProductAddEditPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductAddEditPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductAddEditPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
