import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubheaderTabsComponent } from './subheader-tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule
  ],
  declarations: [SubheaderTabsComponent],
  exports: [SubheaderTabsComponent]
})
export class SubheaderTabsModule { }
