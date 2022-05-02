import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorListComponent } from './form-error-list.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule
  ],
  declarations: [FormErrorListComponent],
  exports: [FormErrorListComponent]
})
export class FormErrorListModule { }
