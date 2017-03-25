import { Routes } from '@angular/router';
import { AppComponent } from './app.component'
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


// Define which component should be loaded based on the current URL
export const routes: Routes = [
  { path: '',       component: SigninComponent },
  { path: 'signin',  component: SigninComponent },
  { path: 'signup',  component: SignupComponent }
];