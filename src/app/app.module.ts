import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { TopNavbarModule } from "./components/top-navbar/top-navbar.module";
import { AuthModule } from "./components/auth/auth.module";
import { DragulaModule } from "ng2-dragula";
import { CartReviewModule } from "./components/cart-review/cart-review.module";
import { HomeModule } from "./components/home/home.module";
import { ComponentModule } from "./components/search/component.module";

@NgModule({
  declarations: [AppComponent],
  imports: 
  [
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    TopNavbarModule,
    HomeModule,
    ComponentModule,
    CartReviewModule,
    DragulaModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule {
  
}


