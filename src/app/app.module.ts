import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule }   from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { TopNavbarModule } from "./components/top-navbar/top-navbar.module";
import { AuthModule } from "./components/auth/auth.module";
import { DragulaModule } from "ng2-dragula";
import { HomeModule } from "./components/home/home.module";
import { PlayerWrapperModule } from "./components/player-wrapper/player-wrapper.module";
import { JwtInterceptor } from "./_interceptors/jwt.interceptor";
import { ErrorInterceptor } from "./errors/error.interceptor";
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { ErrorModule } from "./errors/error.module";
import { TimeagoModule } from "ngx-timeago";
import { NgxSpinnerModule } from "ngx-spinner";
import { LoadingInterceptor } from "./_interceptors/loading.interceptor";

@NgModule({
  declarations: [AppComponent, TestErrorsComponent],
  imports: 
  [
    BrowserModule, 
    FormsModule,
    ErrorModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    TopNavbarModule,
    HomeModule,
    PlayerWrapperModule,
    NgxSpinnerModule,
    DragulaModule.forRoot(),
    TimeagoModule.forRoot()
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule {
  
}


