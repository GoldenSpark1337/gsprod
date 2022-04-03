import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberProfileInfoSectionsComponent } from './member-profile-info-sections.component';
import { CaptionFigureTemplateModule } from 'src/app/shared/modules/caption-figure-template/caption-figure-template.module';
import { ProfileStatsInfoModule } from 'src/app/shared/modules/member-content-item-details-template/components/profile-stats-info/profile-stats-info.module';

@NgModule({
  imports: [
    CommonModule,
    CaptionFigureTemplateModule,
    ProfileStatsInfoModule
  ],
  declarations: [MemberProfileInfoSectionsComponent],
  exports: [MemberProfileInfoSectionsComponent]
})
export class MemberProfileInfoSectionsModule { }
