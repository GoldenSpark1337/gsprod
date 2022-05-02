import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITrack } from '../models/track';
import { TrackService } from './track.service';

@Injectable({
  providedIn: 'root'
})
export class SelectedTrackService {
  private selectedTrack = new BehaviorSubject<ITrack>(null);

  constructor(private trackService: TrackService) { }

  loadTrack(sender: ITrack) {
    this.selectedTrack.next(sender);
    this.trackService.updateTrackPlays(sender.id).subscribe(() => {});
  }

  getTrack() {
    return this.selectedTrack.asObservable();
  }
}
