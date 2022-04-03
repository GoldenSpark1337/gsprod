import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileVisitorActionsComponent } from './profile-visitor-actions.component';
import { ButtonCreateMessageModule } from './components/button-create-message/button-create-message.module';

@NgModule({
  imports: [
    CommonModule,
    ButtonCreateMessageModule
  ],
  declarations: [ProfileVisitorActionsComponent],
  exports: [ProfileVisitorActionsComponent]
})
export class ProfileVisitorActionsModule { }
