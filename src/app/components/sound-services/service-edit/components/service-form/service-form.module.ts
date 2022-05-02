import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceFormComponent } from './service-form.component';
import { FormErrorListModule } from 'src/app/components/tracks/track-edit/components/form-error-list/form-error-list.module';
import { MatCardModule } from '@angular/material/card';
import { TagsInputModule } from 'src/app/components/tracks/track-edit/components/track-form/components/tags-input/tags-input.module';
import { FormsModule } from '@angular/forms';
import { ContentCreationArtworkModule } from 'src/app/components/tracks/track-edit/components/track-form/components/content-creation-artwork/content-creation-artwork.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FormErrorListModule,
    MatCardModule,
    MatButtonModule,
    TagsInputModule,
    ContentCreationArtworkModule
  ],
  declarations: [ServiceFormComponent],
  exports: [
    ServiceFormComponent
  ]
})
export class ServiceFormModule { }
