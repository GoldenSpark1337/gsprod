import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileInfoComponent } from './profile-info.component';
import { MemberProfileInfoSectionsModule } from './components/member-profile-info-sections/member-profile-info-sections.module';
import { HorizontalSeparatorModule } from 'src/app/shared/modules/horizontal-separator/horizontal-separator.module';

@NgModule({
  imports: [
    CommonModule,
    MemberProfileInfoSectionsModule,
    HorizontalSeparatorModule
  ],
  declarations: [ProfileInfoComponent],
  exports: [ProfileInfoComponent]
})
export class ProfileInfoModule { }
