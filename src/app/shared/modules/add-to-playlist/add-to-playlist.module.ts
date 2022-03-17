import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToPlaylistComponent } from './add-to-playlist.component';
import { PlaylistContainerGridComponent } from './components/playlist-container-grid/playlist-container-grid.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [AddToPlaylistComponent, PlaylistContainerGridComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule
  ],
  exports: [
    AddToPlaylistComponent
  ]
})
export class AddToPlaylistModule { }
