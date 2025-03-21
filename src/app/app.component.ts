import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsWrapperComponent } from "./products-wrapper/products-wrapper.component";
import { NavigationBarComponent } from "./navigation-bar/navigation-bar.component";
import { ProductsListComponent } from "./products-list/products-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shopping-app';
}
