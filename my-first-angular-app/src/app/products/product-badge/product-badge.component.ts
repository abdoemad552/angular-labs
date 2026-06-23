import { Component, Input } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-product-badge',
  imports: [UpperCasePipe],
  templateUrl: './product-badge.component.html',
  styleUrl: './product-badge.component.scss',
})
export class ProductBadgeComponent {
  @Input() label?: string;
}
