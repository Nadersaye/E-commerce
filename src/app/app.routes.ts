import { Routes } from '@angular/router';
import { ProductsWrapperComponent } from './products-wrapper/products-wrapper.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { ProductsListComponent } from './products-list/products-list.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent,
  },
  {
    path: 'product-details/:id',
     component: ProductDetailsComponent
   },
   {
     path:'login',
     component:LoginComponent
   },
   {
    path: 'register',
    component: RegisterComponent
   },
   {
    path: 'cart',
    component: CartComponent
   },
   {
     path:'**',
     component:NotFoundComponent
   }

];
