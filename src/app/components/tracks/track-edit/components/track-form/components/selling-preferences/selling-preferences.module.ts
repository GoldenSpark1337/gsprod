import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellingPreferencesComponent } from './selling-preferences.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  declarations: [SellingPreferencesComponent],
  exports: [SellingPreferencesComponent]
})
export class SellingPreferencesModule { }
