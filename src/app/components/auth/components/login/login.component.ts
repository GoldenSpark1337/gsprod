import { Component } from "@angular/core";
import { AccountService } from "src/app/shared/services/account.service";

@Component({
    selector: 'gs-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    model: any = {};


    constructor(private userService: AccountService) {}

    login() {
        this.userService.login(this.model).subscribe(responsee => console.log(responsee));
    }
}