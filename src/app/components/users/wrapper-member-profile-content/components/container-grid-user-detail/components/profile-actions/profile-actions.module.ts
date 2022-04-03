import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileActionsComponent } from './profile-actions.component';
import { SquareButtonModule } from 'src/app/shared/modules/square-button/square-button.module';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SquareButtonModule,
    MatIconModule,
    RouterModule
  ],
  declarations: [ProfileActionsComponent],
  exports: [ProfileActionsComponent]
})
export class ProfileActionsModule { }
