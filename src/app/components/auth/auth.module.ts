import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AuthRoutingModule } from "./auth-routing.module";

import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { ForgotComponent } from './components/forgot/forgot.component';
import { AuthWrapperComponent } from './components/auth-wrapper/auth-wrapper.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TextInpurComponent } from './components/text-input/text-input.component';
import { SquareButtonModule } from "src/app/shared/modules/square-button/square-button.module";


@NgModule({
    declarations: [LoginComponent, RegisterComponent, ForgotComponent, AuthWrapperComponent, TextInpurComponent],
    imports: [
        CommonModule, 
        FormsModule, 
        AuthRoutingModule,
        SquareButtonModule,
        ReactiveFormsModule
    ],
    exports: []
})

export class AuthModule {}