import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellingPreferencesComponent } from './selling-preferences.component';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatRadioModule
  ],
  declarations: [SellingPreferencesComponent],
  exports: [SellingPreferencesComponent]
})
export class SellingPreferencesModule { }
