import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AuthRoutingModule } from "./auth-routing.module";

import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { ForgotComponent } from './components/forgot/forgot.component';

import { HeaderModule } from "./shared/header/header.module";

@NgModule({
    declarations: [LoginComponent, RegisterComponent, ForgotComponent],
    imports: [CommonModule, HeaderModule, AuthRoutingModule],
    exports: []
})

export class AuthModule {}