import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaptionFigureTemplateComponent } from './caption-figure-template.component';
import { SponsoredBadgeComponent } from './components/sponsored-badge/sponsored-badge.component';



@NgModule({
  declarations: [CaptionFigureTemplateComponent, SponsoredBadgeComponent],
  imports: [
    CommonModule
  ],
  exports: [CaptionFigureTemplateComponent]
})
export class CaptionFigureTemplateModule { }
