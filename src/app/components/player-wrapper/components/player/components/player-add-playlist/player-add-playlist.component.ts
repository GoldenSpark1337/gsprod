import { NoopScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddToPlaylistComponent } from 'src/app/shared/modules/add-to-playlist/add-to-playlist.component';

@Component({
  selector: 'gs-player-add-playlist',
  templateUrl: './player-add-playlist.component.html',
  styleUrls: ['./player-add-playlist.component.css']
})
export class PlayerAddPlaylistComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddToPlaylistComponent, {
      scrollStrategy: new NoopScrollStrategy() // avoid backdrop white screen when opening in scrolled state
    });
  }
}
