import { Component, input, OnInit, output, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductEdit } from '../../core/models/product-edit.model';
import { ProductAdd } from '../../core/models/product-add.model';
import { FormArray, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../../core/models/product.model';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-product-add-edit-page',
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './product-add-edit-page.html',
  styleUrl: './product-add-edit-page.css',
})
export class ProductAddEditPage implements OnInit {
  isEditMode = signal<boolean>(false);
  editingProduct = signal<Product | undefined>(undefined);

  form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(10)]),
    price: new FormControl<number | null>(null, [Validators.required, Validators.min(0.01)]),
    discountPercentage: new FormControl<number | null>(null, [
      Validators.min(0),
      Validators.max(100),
    ]),
    image: new FormControl('', [Validators.required]),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
  ) {}

  ngOnInit() {
    const product = this.route.snapshot.data['product'] as Product | undefined;

    if (product) {
      this.isEditMode.set(true);
      this.editingProduct.set(product);
      this.form.patchValue({
        title: product.title,
        description: product.description,
        price: product.price,
        discountPercentage: product.discountPercentage,
        image: product.images[0],
      });
    }
  }

  get f() {
    return this.form.controls;
  }

  isInvalid(control: FormControl): boolean {
    return control.invalid && (control.dirty || control.touched);
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();

    const data: Omit<Product, 'id'> = {
      title: value.title!,
      description: value.description!,
      price: value.price!,
      discountPercentage: value.discountPercentage ?? undefined,
      images: [value.image!],
    };

    if (this.isEditMode()) {
      this.productService.updateProduct(this.editingProduct()!.id, data);
    } else {
      this.productService.addProduct(data);
    }

    this.router.navigate(['/']);
  }
}
