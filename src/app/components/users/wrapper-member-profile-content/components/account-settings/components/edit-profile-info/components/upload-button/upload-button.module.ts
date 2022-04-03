import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadButtonComponent } from './upload-button.component';
import { SquareButtonModule } from 'src/app/shared/modules/square-button/square-button.module';
import { MatButtonModule } from '@angular/material/button';
import { FileUploadModule } from 'ng2-file-upload';
import { MatDialogModule } from '@angular/material/dialog';
import { UploadButtonMatdialogContentModule } from '../upload-button-matdialog-content/upload-button-matdialog-content.module';

@NgModule({
  imports: [
    CommonModule,
    SquareButtonModule,
    MatButtonModule,
    FileUploadModule,
    MatDialogModule,
    UploadButtonMatdialogContentModule
  ],
  declarations: [UploadButtonComponent],
  exports: [
    UploadButtonComponent, 
    FileUploadModule
  ]
})
export class UploadButtonModule { }
