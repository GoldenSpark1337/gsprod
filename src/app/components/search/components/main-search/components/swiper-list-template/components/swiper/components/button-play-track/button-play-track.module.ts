import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonPlayItemModule } from 'src/app/shared/modules/button-play-item/button-play-item.module';
import { ButtonPlayTrackComponent } from './button-play-track.component';

@NgModule({
    imports: [
        CommonModule,
        ButtonPlayItemModule
    ],
    exports: [ButtonPlayTrackComponent],
    declarations: [ButtonPlayTrackComponent]
})
export class ButtonPlayTrackModule { }
