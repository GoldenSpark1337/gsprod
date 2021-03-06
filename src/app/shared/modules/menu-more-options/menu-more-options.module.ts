import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuMoreOptionsComponent } from './menu-more-options.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  declarations: [MenuMoreOptionsComponent],
  exports: [MenuMoreOptionsComponent]
})
export class MenuMoreOptionsModule { }
