import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountSettingsComponent } from './account-settings.component';
import { MainHeaderModule } from 'src/app/shared/modules/main-header/main-header.module';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileInfoModule } from './components/edit-profile-info/edit-profile-info.module';

const routes: Routes = [{
  path: '', component: AccountSettingsComponent
}];

@NgModule({
  imports: [
    CommonModule,
    MainHeaderModule,
    RouterModule.forChild(routes),
    EditProfileInfoModule
  ],
  declarations: [AccountSettingsComponent],
  exports: [AccountSettingsComponent]
})
export class AccountSettingsModule { }
