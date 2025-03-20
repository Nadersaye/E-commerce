import { CommonModule } from '@angular/common';
import { Component, Input,input} from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
 productItem= input.required<Product>() ;
}
