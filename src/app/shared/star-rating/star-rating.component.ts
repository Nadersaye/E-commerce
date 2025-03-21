import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})
export class StarRatingComponent {
  @Input() rating: number = 0;
  @Input() color: string = 'green';
  @Input() size: string = '1.2rem';
  @Input() showRatingValue: boolean = false;

  stars = [1, 2, 3, 4, 5];
}
