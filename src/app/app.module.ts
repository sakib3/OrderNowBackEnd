import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { routes } from './app.routes';
import { MaterialModule } from '@angular/material';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ShopsComponent } from './shops/shops.component';
import { WebService } from './web.service';



@NgModule({
  declarations: [
    AppComponent, SignupComponent, SigninComponent, ShopsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {
      useHash: true
    }),
    MaterialModule
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
