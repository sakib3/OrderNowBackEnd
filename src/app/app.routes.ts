import { Routes } from '@angular/router';
import { AppComponent } from './app.component'
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ShopsComponent } from './shops/shops.component';
import { ProductsComponent } from './products/products.component';

// Define which component should be loaded based on the current URL
export const routes: Routes = [
  { path: '',       component: SigninComponent },
  { path: 'signin',  component: SigninComponent },
  { path: 'signup',  component: SignupComponent },
  { path: 'shops',  component: ShopsComponent },
  { path: 'products',  component: ProductsComponent }
];