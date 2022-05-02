import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({providedIn: 'root'})

export class SpinnerService {
    spinnerRequestCount = 0;
    constructor(private spinnerService: NgxSpinnerService) { }

    busy() {
        this.spinnerRequestCount++;
        this.spinnerService.show(undefined, {
            bdColor: "rgba(51,51,51,0.8)",
            size: 'medium',
            color: "#fff",
        });
    }

    idle() {
        this.spinnerRequestCount--;
        if (this.spinnerRequestCount <= 0) {
            this.spinnerRequestCount = 0;
            this.spinnerService.hide();
        }
    }
}