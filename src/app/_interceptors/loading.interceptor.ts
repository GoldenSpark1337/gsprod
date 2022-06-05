import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpinnerService } from '../shared/services/spinner.service';
import { delay, finalize } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
    constructor(private spinnerService: SpinnerService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinnerService.busy();
        return next.handle(req).pipe(
            // delay(50000),
            finalize(() => {
                this.spinnerService.idle()
            })
        );
    };
}