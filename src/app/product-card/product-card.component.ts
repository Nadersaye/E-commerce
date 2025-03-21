import { CommonModule } from '@angular/common';
import { Component, Input,input} from '@angular/core';
import { Product } from '../models/product';
import { Router } from '@angular/router';
import { StarRatingComponent } from "../shared/star-rating/star-rating.component";

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, StarRatingComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
 productItem= input.required<Product>() ;
 constructor(private router: Router) { }


 viewItemDetails(id:number)
  {
    console.log("Viewing item details for id: ");
    this.router.navigate(['/product-details', id]);
  }
}
