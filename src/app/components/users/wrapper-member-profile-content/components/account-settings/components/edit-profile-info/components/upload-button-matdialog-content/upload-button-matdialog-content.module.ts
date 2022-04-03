import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadButtonMatdialogContentComponent } from './upload-button-matdialog-content.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HeaderModule } from 'src/app/shared/modules/header/header.module';
import { UppyAngularDragDropModule } from '@uppy/angular';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    HeaderModule,
    MatIconModule,
    UppyAngularDragDropModule
  ],
  declarations: [UploadButtonMatdialogContentComponent],
  exports: [
    UploadButtonMatdialogContentComponent
  ],

})
export class UploadButtonMatdialogContentModule { }
