import { Component, Input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'product-filter.component.html',
  styleUrl: 'product-filter.component.scss',
})
export class ProductFilterComponent {
  @Input({ required: true }) categories: string[] = [];

  categoryChange = output<string>();

  selected = signal('All');

  select(cat: string) {
    this.selected.set(cat);
    this.categoryChange.emit(cat);
  }
}
