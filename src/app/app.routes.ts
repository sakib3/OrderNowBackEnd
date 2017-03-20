import { Routes } from '@angular/router';
import { AppComponent } from './app.component'
import { Login } from './login';


// Define which component should be loaded based on the current URL
export const routes: Routes = [
  { path: '',       component: Login },
  { path: 'login',  component: Login },
];