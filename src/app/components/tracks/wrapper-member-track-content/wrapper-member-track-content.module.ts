import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperMemberTrackContentComponent } from './wrapper-member-track-content.component';
import { RouterModule, Routes } from '@angular/router';
import { MemberContentItemDetailsTemplateModule } from 'src/app/shared/modules/member-content-item-details-template/member-content-item-header-template.module';
import { MemberContentItemHeaderTemplateModule } from 'src/app/shared/modules/member-content-item-header-template/member-content-item-header-template.module';
import { ContainerGridTrackDetailComponent } from './components/container-grid-track-detail/container-grid-track-detail.component';
import { OpenClosePanelTrackComponent } from './components/open-close-panel-track/open-close-panel-track.component';
import { LicensesUsageTermsComponent } from './components/licenses-usage-terms/licenses-usage-terms.component';
import { WrapperBuyLicenseItemComponent } from './components/open-close-panel-track/components/wrapper-buy-license-item/wrapper-buy-license-item.component';
import { SquareButtonModule } from 'src/app/shared/modules/square-button/square-button.module';
import { MatIconModule } from '@angular/material/icon';
import { HorizontalSeparatorModule } from 'src/app/shared/modules/horizontal-separator/horizontal-separator.module';

const routes: Routes = [
  {path:'', component: WrapperMemberTrackContentComponent}
];

@NgModule({
  declarations: [
    WrapperMemberTrackContentComponent, 
    ContainerGridTrackDetailComponent,
    OpenClosePanelTrackComponent,
    LicensesUsageTermsComponent,
    WrapperBuyLicenseItemComponent
  ],
  imports: [
    CommonModule,
    MemberContentItemDetailsTemplateModule,
    MemberContentItemHeaderTemplateModule,
    SquareButtonModule,
    MatIconModule,
    HorizontalSeparatorModule,
    RouterModule.forChild(routes)
  ],
  exports: [WrapperMemberTrackContentComponent]
})
export class WrapperMemberTrackContentModule { }
