import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITrack } from '../models/track';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private baseUrl = environment.apiUrl + "tracks/";
  public tracks: ITrack[] = [];

  constructor(private http: HttpClient) { }

  getTracks() {
    if (this.tracks.length > 0) return of(this.tracks); 
    return this.http.get<ITrack[]>(this.baseUrl).pipe(
      map(tracks => { 
        this.tracks = tracks;
        return tracks;
      })
    );
  }

  getTrack(id: number) {
    const track = this.tracks.find(x => x.id === id);
    if (track !== undefined) return of(track);
    return this.http.get<ITrack>(this.baseUrl + `${id}`);
  }
}
