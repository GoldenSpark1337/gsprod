import { NoopScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UploadButtonMatdialogContentComponent } from 'src/app/components/users/wrapper-member-profile-content/components/account-settings/components/edit-profile-info/components/upload-button-matdialog-content/upload-button-matdialog-content.component';
import { IGenre } from 'src/app/shared/models/genre';
import { IKey } from 'src/app/shared/models/key';
import { ISubgenre } from 'src/app/shared/models/subgenre';
import { ITrack } from 'src/app/shared/models/track';
import { GenreService } from 'src/app/shared/services/genre.service';
import { KeyService } from 'src/app/shared/services/key.service';
import { SubgenreService } from 'src/app/shared/services/subgenre.service';
import { TrackService } from 'src/app/shared/services/track.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'gs-track-form',
  templateUrl: './track-form.component.html',
  styleUrls: ['./track-form.component.css']
})
export class TrackFormComponent implements OnInit {
  track!: ITrack;
  trackUpdateForm: FormGroup;
  trackTags: string[] = [];
  genres: IGenre[] = [];
  subgenres: ISubgenre[] = [];
  keys: IKey[] = [];
  selectedGenre: number;
  selectedSubgenre: number;
  selectedKey: number;
  
  constructor(
    private trackService: TrackService,
    private formBuilder: FormBuilder, 
    private genreService: GenreService,
    private subgenreService: SubgenreService,
    private keyService: KeyService,
    private route: ActivatedRoute,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.trackService.getTrack(+this.route.snapshot.paramMap.get("id")).subscribe(
      track => {
        this.track = track
      }
    );
    this.getGenres();
    this.getSubgenres();
    this.getKeys();
    this.createUpdateForm();
  }

  createUpdateForm() {
    this.trackUpdateForm = this.formBuilder.group({
      title: [this.track?.title, [Validators.required, Validators.maxLength(100)]],
      tag: [this.track?.tags, Validators.required],
      price: [this.track?.price, Validators.required],
      genre: [this.track?.genre, Validators.required],
      subgenre: [this.track?.subgenre],
      description: [this.track?.description],
      bpm: [this.track?.bpm, [Validators.required, Validators.min(1), Validators.max(300)]],
      key: [this.track?.key]
    });
  }

  getGenres() {
    this.genreService.getGenres().subscribe(
      genres => this.genres = genres
    );
  }

  getSubgenres() {
    this.subgenreService.getSubgenres().subscribe(
      subgenres => this.subgenres = subgenres
    );
  }

  getKeys() {
    this.keyService.getKeys().subscribe(
      keys => this.keys = keys
    );
  }

  openDialog() {
    const dialogRef = this.dialog.open(UploadButtonMatdialogContentComponent, {
      data: {
        url: environment.apiUrl + "tracks/" + this.track.id,
        method: "PUT"
      },
      scrollStrategy: new NoopScrollStrategy()
    });

    dialogRef.afterClosed().subscribe(res => {
      
    });
  }

  addTrackTags(tag: string) {
    if (!this.trackTags.includes(tag)) {
      this.trackTags.push(tag);
      this.trackUpdateForm.controls["tag"].setValue(this.trackTags);
    }
  }

  updateTrack() {
  }
}
