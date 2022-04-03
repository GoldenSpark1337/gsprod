import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";
import { AccountService } from "src/app/shared/services/account.service";

@Component({
    selector: 'gs-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    model: any = {};
    loginForm: FormGroup;

    constructor(private userService: AccountService, private snackBar: MatSnackBar) {}

    ngOnInit(): void {
        this.createLoginForm();
    }

    createLoginForm() {
        this.loginForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', Validators.required)
        });
    }

    login() {
        this.userService.login(this.loginForm.value).subscribe(responsee => {
            console.log(responsee)
        }, error => {
            let config = new MatSnackBarConfig();
            config.duration = 8000;
            this.snackBar.open("Username or password is incorrect", "OK", config);
        });
    }
}