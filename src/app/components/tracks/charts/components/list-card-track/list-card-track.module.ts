import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCardTrackComponent } from './list-card-track.component';
import { ListCardTemplateModule } from 'src/app/shared/modules/list-card-template/list-card-template.module';

@NgModule({
  imports: [
    CommonModule,
    ListCardTemplateModule
  ],
  declarations: [ListCardTrackComponent],
  exports: [ListCardTrackComponent]
})
export class ListCardTrackModule { }
