import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileInfoComponent } from './edit-profile-info.component';
import { ImageModule } from 'src/app/shared/modules/member-content-item-header-template/components/image/image.module';
import { UploadButtonModule } from './components/upload-button/upload-button.module';
import { TextInputModule } from './components/text-input/text-input.module';
import { SquareButtonModule } from 'src/app/shared/modules/square-button/square-button.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ImageModule,
    UploadButtonModule,
    TextInputModule,
    SquareButtonModule
  ],
  declarations: [EditProfileInfoComponent],
  exports: [EditProfileInfoComponent]
})
export class EditProfileInfoModule { }
