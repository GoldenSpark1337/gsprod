import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { NavigationExtras, Router } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router, private _matSnackBar: MatSnackBar) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(error => {
        if (error) {
          switch (error.status) {
            case 400:
              if (error.error.errors) {
                const modalStateErrors = [];
                for (const key in error.error.errors) {
                  if (error.error.errors)
                    modalStateErrors.push(error.error.errors[key]);
                }
                throw modalStateErrors.flat();
              } else {
                this.openSnackBar(`${error.status}: ${error.statusText}`)
              }
              break;

            case 401:
              this.openSnackBar(`${error.status}: ${error.statusText}`);
              break;

            case 404:
              this.router.navigateByUrl("/not-found");
              break;

            case 500:
              const navigationExtras: NavigationExtras = {state: {error: error.error}};
              this.router.navigateByUrl("/server-error", navigationExtras);
              break;

            default:
              this.openSnackBar("Something went wrong");
              console.log(error);
              break;
          }
        }
        return throwError(error);
      })
    );
  }

  private openSnackBar(message: string): void {
    let config = new MatSnackBarConfig();
    config.duration = 8000;
    this._matSnackBar.open(message, "OK", config);
  }
}
