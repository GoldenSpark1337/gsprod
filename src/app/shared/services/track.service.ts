import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITrack } from '../models/track';
import { TrackParams } from '../models/params/trackParams';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private baseUrl = environment.apiUrl + "tracks/";
  public tracks: ITrack[] = [];

  constructor(private http: HttpClient) { }

  getTracks(trackParams?: TrackParams) : Observable<ITrack[]> {
    let params = new HttpParams();

    if (trackParams) {
      params = params.append("isDraft", trackParams.isDraft);
    }

    if (this.tracks.length > 0) return of(this.tracks); 
    return this.http.get<ITrack[]>(this.baseUrl, {observe: 'response', params}).pipe(
      map((tracks) => {
        this.tracks = tracks.body;
        return tracks.body;
      })
    );
  }

  getTrack(id: number) {
    const track = this.tracks.find(x => x.id === id);
    if (track !== undefined) return of(track);
    return this.http.get<ITrack>(this.baseUrl + `${id}`);
  }

  createTrack() {
    return this.http.post(this.baseUrl, {});
  }

  updateTrackPlays(id: number) {
    return this.http.patch(this.baseUrl + "edit/" + id.toString() + "/plays", {})
  }
}
