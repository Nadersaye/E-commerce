import { Component, Input } from '@angular/core';
import { Review } from '../models/review';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-product-review-card',
  imports: [DatePipe],
  templateUrl: './product-review-card.component.html',
  styleUrl: './product-review-card.component.css'
})
export class ProductReviewCardComponent {
  @Input()
  review!: Review;
}
