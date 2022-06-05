import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackFormComponent } from './track-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormErrorListModule } from '../form-error-list/form-error-list.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UploadButtonModule } from 'src/app/components/users/wrapper-member-profile-content/components/account-settings/components/edit-profile-info/components/upload-button/upload-button.module';
import { ContentCreationArtworkModule } from './components/content-creation-artwork/content-creation-artwork.module';
import { UniversalUploadButtonModule } from 'src/app/shared/modules/universal-upload-button/universal-upload-button.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { SellingPreferencesModule } from './components/selling-preferences/selling-preferences.module';
import { TagsInputModule } from './components/tags-input/tags-input.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormErrorListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    UploadButtonModule,
    UniversalUploadButtonModule,
    ContentCreationArtworkModule,
    MatChipsModule,
    SellingPreferencesModule,
    TagsInputModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  declarations: [
    TrackFormComponent
  ],
  exports: [TrackFormComponent]
})
export class TrackFormModule { }
