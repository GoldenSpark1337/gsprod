import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperMemberProfileContentComponent } from './wrapper-member-profile-content/wrapper-member-profile-content.component';
import { RouterModule, Routes } from '@angular/router';
import { AccountSettingsModule } from './wrapper-member-profile-content/components/account-settings/account-settings.module';
import { ContainerGridUserDetailModule } from './wrapper-member-profile-content/components/container-grid-user-detail/container-grid-user-detail.module';

const routes: Routes = [
  {path: '', component: WrapperMemberProfileContentComponent}
]

@NgModule({
  declarations: [WrapperMemberProfileContentComponent],
  imports: [
    CommonModule,
    ContainerGridUserDetailModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    WrapperMemberProfileContentComponent
  ]
})
export class WrapperMemberProfileContentModule { }
