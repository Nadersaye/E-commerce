import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsWrapperComponent } from "./products-wrapper/products-wrapper.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductsWrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shopping-app';
}
