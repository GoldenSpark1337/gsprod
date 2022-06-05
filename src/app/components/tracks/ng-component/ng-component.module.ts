import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderModule } from 'src/app/shared/modules/main-header/main-header.module';
import { SubheaderTabsModule } from 'src/app/shared/modules/subheader-tabs/subheader-tabs.module';
import { NgComponent } from './ng-component.component';
import { RouterModule, Routes } from '@angular/router';
import { MyTracksComponent } from '../my-tracks/my-tracks.component';
import { MyDraftsComponent } from '../my-drafts/my-drafts.component';
import { MyDraftsModule } from '../my-drafts/my-drafts.module';

const routes: Routes = [
  {path: '', component: NgComponent, children: [
    {path: '', redirectTo: 'my-tracks'},
    {path: 'my-tracks', component: MyTracksComponent},
    {path: 'drafts', component: MyDraftsComponent}
  ]}
];

@NgModule({
  imports: [
    CommonModule,
    MainHeaderModule,
    SubheaderTabsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NgComponent],
  exports: [NgComponent]
})
export class NgComponentModule { }
