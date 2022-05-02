import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentCreationArtworkComponent } from './content-creation-artwork.component';
import { ImageModule } from 'src/app/shared/modules/member-content-item-header-template/components/image/image.module';
import { UploadButtonModule } from 'src/app/components/users/wrapper-member-profile-content/components/account-settings/components/edit-profile-info/components/upload-button/upload-button.module';

@NgModule({
  imports: [
    CommonModule,
    ImageModule,
    UploadButtonModule
  ],
  declarations: [ContentCreationArtworkComponent],
  exports: [ContentCreationArtworkComponent]
})
export class ContentCreationArtworkModule { }
