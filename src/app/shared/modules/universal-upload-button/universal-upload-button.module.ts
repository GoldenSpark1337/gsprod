import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversalUploadButtonComponent } from './universal-upload-button.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: [UniversalUploadButtonComponent],
  exports: [UniversalUploadButtonComponent]
})
export class UniversalUploadButtonModule { }
