import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileInfoComponent } from './edit-profile-info.component';
import { ImageModule } from 'src/app/shared/modules/member-content-item-header-template/components/image/image.module';
import { UploadButtonModule } from './components/upload-button/upload-button.module';

@NgModule({
  imports: [
    CommonModule,
    ImageModule,
    UploadButtonModule
  ],
  declarations: [EditProfileInfoComponent],
  exports: [EditProfileInfoComponent]
})
export class EditProfileInfoModule { }
