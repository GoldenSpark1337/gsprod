import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperMemberSoundkitContentComponent } from './wrapper-member-soundkit-content.component';
import { RouterModule, Routes } from '@angular/router';
import { ContainerGridWrapperDetailModule } from 'src/app/shared/modules/container-grid-wrapper-detail/container-grid-wrapper-detail.module';

const routes: Routes = [
  {path:'', component: WrapperMemberSoundkitContentComponent}
];

@NgModule({
  declarations: [
    WrapperMemberSoundkitContentComponent
  ],
  imports: [
    CommonModule,
    ContainerGridWrapperDetailModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    WrapperMemberSoundkitContentComponent
  ]
})
export class WrapperMemberSoundkitContentModule { }
