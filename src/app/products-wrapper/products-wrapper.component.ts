import { Component } from '@angular/core';
import { ProductsListComponent } from "../products-list/products-list.component";
import { NavigationBarComponent } from "../navigation-bar/navigation-bar.component";

@Component({
  selector: 'app-products-wrapper',
  imports: [ProductsListComponent, NavigationBarComponent],
  templateUrl: './products-wrapper.component.html',
  styleUrl: './products-wrapper.component.css'
})
export class ProductsWrapperComponent {

}
