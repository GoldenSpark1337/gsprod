import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitsEditComponent } from './kits-edit.component';
import { MainHeaderModule } from 'src/app/shared/modules/main-header/main-header.module';
import { FormErrorListModule } from '../../tracks/track-edit/components/form-error-list/form-error-list.module';
import { MatCardModule } from '@angular/material/card';
import { TagsInputModule } from '../../tracks/track-edit/components/track-form/components/tags-input/tags-input.module';
import { ContentCreationArtworkModule } from '../../tracks/track-edit/components/track-form/components/content-creation-artwork/content-creation-artwork.module';
import { UploadButtonModule } from '../../users/wrapper-member-profile-content/components/account-settings/components/edit-profile-info/components/upload-button/upload-button.module';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {path:'', component: KitsEditComponent}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MainHeaderModule,
    FormErrorListModule,
    MatCardModule,
    MatButtonModule,
    TagsInputModule,
    ContentCreationArtworkModule,
    UploadButtonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KitsEditComponent],
  exports: [KitsEditComponent]
})
export class KitsEditModule { }
