import { Component } from "@angular/core";
import { AccountService } from "src/app/shared/services/account.service";

@Component({
    selector: 'gs-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent {
    model: any ={};
    constructor(private userService: AccountService) {}

    register() {
        this.userService.register(this.model).subscribe(response => {
            console.log(response);
        }, error => console.log(error))
    }
}