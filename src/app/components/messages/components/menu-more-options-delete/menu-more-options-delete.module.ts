import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuMoreOptionsDeleteComponent } from './menu-more-options-delete.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  declarations: [MenuMoreOptionsDeleteComponent],
  exports: [MenuMoreOptionsDeleteComponent]
})
export class MenuMoreOptionsDeleteModule { }
