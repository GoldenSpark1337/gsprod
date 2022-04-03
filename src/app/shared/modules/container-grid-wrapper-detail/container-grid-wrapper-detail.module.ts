import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberContentItemHeaderTemplateModule } from '../member-content-item-header-template/member-content-item-header-template.module';
import { MemberContentItemDetailsTemplateModule } from '../member-content-item-details-template/member-content-item-header-template.module';
import { ContainerGridWrapperDetailComponent } from './container-grid-wrapper-detail.component';



@NgModule({
  declarations: [ContainerGridWrapperDetailComponent],
  imports: [
    CommonModule,
    MemberContentItemHeaderTemplateModule,
    MemberContentItemDetailsTemplateModule
  ],
  exports: [
    ContainerGridWrapperDetailComponent
  ]
})
export class ContainerGridWrapperDetailModule { }
