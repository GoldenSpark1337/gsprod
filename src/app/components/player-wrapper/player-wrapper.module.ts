import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerWrapperComponent } from './player-wrapper.component';
import { PlayerProgressBarComponent } from './components/player-progress-bar/player-progress-bar.component';
import { PlayerComponent } from './components/player/player.component';
import { PlayableItemInfoComponent } from './components/player/components/playable-item-info/playable-item-info.component';
import { PlayableItemImageComponent } from './components/player/components/playable-item-info/components/playable-item-image/playable-item-image.component';
import { PlayableItemTitleComponent } from './components/player/components/playable-item-info/components/playable-item-title/playable-item-title.component';
import { PlayableItemSubtitleComponent } from './components/player/components/playable-item-info/components/playable-item-subtitle/playable-item-subtitle.component';
import { PlayerAddPlaylistComponent } from './components/player/components/player-add-playlist/player-add-playlist.component';
import { MaterialModule } from 'src/app/core/material.module';
import { MatIconModule } from '@angular/material/icon';
import { BtnBuyFromTrackModule } from 'src/app/shared/modules/btn-buy-from-track/btn-buy-from-track.module';
import { AddToPlaylistComponent } from 'src/app/shared/modules/add-to-playlist/add-to-playlist.component';
import { AddToPlaylistModule } from 'src/app/shared/modules/add-to-playlist/add-to-playlist.module';
import { PlayerPlayComponent } from './components/player/components/middle/player-play/player-play.component';
import { PlayerPreviousComponent } from './components/player/components/middle/player-previous/player-previous.component';
import { PlayerNextComponent } from './components/player/components/middle/player-next/player-next.component';
import { PlayerShuffleComponent } from './components/player/components/middle/player-shuffle/player-shuffle.component';
import { PlayerRepeatComponent } from './components/player/components/middle/player-repeat/player-repeat.component';
import { PlayerVolumeActionComponent } from './components/player/components/right-side/player-volume-action/player-volume-action.component';
import { PlayerQueueActionComponent } from './components/player/components/right-side/player-queue-action/player-queue-action.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PlayerWrapperComponent,
    PlayerComponent,
    PlayerProgressBarComponent,
    PlayableItemInfoComponent,
    PlayableItemImageComponent,
    PlayableItemTitleComponent,
    PlayableItemSubtitleComponent,
    PlayerAddPlaylistComponent,
    PlayerPlayComponent,
    PlayerPreviousComponent,
    PlayerNextComponent,
    PlayerShuffleComponent,
    PlayerRepeatComponent,
    PlayerVolumeActionComponent,
    PlayerQueueActionComponent
  ],
  entryComponents: [AddToPlaylistComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    MatIconModule,
    BtnBuyFromTrackModule,
    AddToPlaylistModule
  ],
  exports: [PlayerWrapperComponent]
})
export class PlayerWrapperModule { }
