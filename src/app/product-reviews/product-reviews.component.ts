import { Component, Input } from '@angular/core';
import { DatePipe } from  '@angular/common';
import { Review } from '../models/review';
import { ProductReviewCardComponent } from "../product-review-card/product-review-card.component";
@Component({
  selector: 'app-product-reviews',
  imports: [ ProductReviewCardComponent],
  templateUrl: './product-reviews.component.html',
  styleUrl: './product-reviews.component.css'
})
export class ProductReviewsComponent {
@Input() reviews: Review[]=[];
}
