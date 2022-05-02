import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberContentItemDetailsTemplateComponent } from './member-content-item-details-template.component';
import { OpenClosePanelTemplateComponent } from './components/open-close-panel-template/open-close-panel-template.component';
import { ProfileInfoSectionsComponent } from './components/profile-info-sections/profile-info-sections.component';
import { CaptionFigureTemplateModule } from '../caption-figure-template/caption-figure-template.module';
import { ProfileStatsInfoComponent } from './components/profile-stats-info/profile-stats-info.component';
import { TagListComponent } from './components/tag-list/tag-list.component';
import { SquareButtonModule } from '../square-button/square-button.module';
import { HorizontalSeparatorModule } from '../horizontal-separator/horizontal-separator.module';
import { ProfileStatsInfoModule } from './components/profile-stats-info/profile-stats-info.module';
import { TagListModule } from './components/tag-list/tag-list.module';



@NgModule({
  declarations: [
    MemberContentItemDetailsTemplateComponent,
    OpenClosePanelTemplateComponent,
    ProfileInfoSectionsComponent
  ],
  imports: [
    CommonModule,
    CaptionFigureTemplateModule,
    SquareButtonModule,
    HorizontalSeparatorModule,
    ProfileStatsInfoModule,
    TagListModule
  ],
  exports: [MemberContentItemDetailsTemplateComponent]
})
export class MemberContentItemDetailsTemplateModule { }
