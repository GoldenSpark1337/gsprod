import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileHeaderComponent } from './profile-header.component';
import { CaptionFigureTemplateModule } from 'src/app/shared/modules/caption-figure-template/caption-figure-template.module';
import { ProfileActionsModule } from '../profile-actions/profile-actions.module';
import { ProfileVisitorActionsModule } from '../profile-visitor-actions/profile-visitor-actions.module';

@NgModule({
  imports: [
    CommonModule,
    CaptionFigureTemplateModule,
    ProfileActionsModule,
    ProfileVisitorActionsModule
  ],
  declarations: [ProfileHeaderComponent],
  exports: [ProfileHeaderComponent]
})
export class ProfileHeaderModule { }
