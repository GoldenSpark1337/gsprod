import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddToPlaylistComponent } from '../../add-to-playlist.component';

@Component({
  selector: 'gs-playlist-container-grid',
  templateUrl: './playlist-container-grid.component.html',
  styleUrls: ['./playlist-container-grid.component.css']
})
export class PlaylistContainerGridComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<AddToPlaylistComponent>) { }

  ngOnInit(): void {
  }

  closeDialog(){
    this.dialogRef.close();
  }
}
