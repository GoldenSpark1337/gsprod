import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentDialogComponent } from './payment-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HeaderModule } from 'src/app/shared/modules/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    HeaderModule
  ],
  declarations: [PaymentDialogComponent]
})
export class PaymentDialogModule { }
