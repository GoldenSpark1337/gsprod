import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";
import { AccountService } from "src/app/shared/services/account.service";

@Component({
    selector: 'gs-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    constructor(private userService: AccountService, private snackBar: MatSnackBar, 
        private fb: FormBuilder) {}
    
    ngOnInit(): void {
        this.createRegisterForm();
    }

    createRegisterForm() {
        this.registerForm = this.fb.group({
            username: [null, [Validators.required]],
            email: [null, [Validators.required, Validators.email]],
            password: [null, [Validators.required]],
            confirmPassword: [null, [Validators.required]]
        });
    }

    register() {
        this.userService.register(this.registerForm.value).subscribe(response => {
            console.log(response);
        }, error => {
            let config = new MatSnackBarConfig();
            config.duration = 8000;
            this.snackBar.open(error[0], "OK", config);
        })
    }
}