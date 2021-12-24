import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { TopNavbarModule } from "./components/top-navbar/top-navbar.module";
import { AuthModule } from "./components/auth/auth.module";
import { DashboardModule } from "./components/dashboard/dashboard.module";

@NgModule({
  declarations: [AppComponent],
  imports: 
  [
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TopNavbarModule,
    AuthModule,
    DashboardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule {
  
}


