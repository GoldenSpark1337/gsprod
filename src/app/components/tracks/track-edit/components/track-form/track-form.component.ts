import { NoopScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { UploadButtonMatdialogContentComponent } from 'src/app/components/users/wrapper-member-profile-content/components/account-settings/components/edit-profile-info/components/upload-button-matdialog-content/upload-button-matdialog-content.component';
import { ITrack } from 'src/app/shared/models/track';
import { TrackService } from 'src/app/shared/services/track.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'gs-track-form',
  templateUrl: './track-form.component.html',
  styleUrls: ['./track-form.component.css']
})
export class TrackFormComponent implements OnInit {
  track!: ITrack;
  trackTags: string[] = [];
  
  constructor(
    private trackService: TrackService, 
    private route: ActivatedRoute,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.trackService.getTrack(+this.route.snapshot.paramMap.get("id")).subscribe(
      track => this.track = track
    );
  }

  openDialog() {
    const dialogRef = this.dialog.open(UploadButtonMatdialogContentComponent, {
      data: {
        url: environment.apiUrl + "tracks/" + this.track.id
      },
      scrollStrategy: new NoopScrollStrategy()
    });

    dialogRef.afterClosed().subscribe(res => {
      
    });
  }

  addTrackTags(tag: string) {
    this.trackTags.push(tag);
  }
}
