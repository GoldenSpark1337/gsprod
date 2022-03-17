import { ElementRef, Injectable, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ITrack } from 'src/app/shared/models/track';

@Injectable({
  providedIn: 'root'
})
export class PlayerService implements OnInit{
  currentProgress$ = new BehaviorSubject(0);
  currentTime$ = new Subject();

  @ViewChild('player', {static: true}) player!: ElementRef;

  tracks: ITrack[] = [];

  audio = new Audio();
  isPlaying: boolean = false;
  activeSong: any;
  durationTime?: string;
  constructor() { }

  ngOnInit(): void {
    // this.tracks = getListOfTracks(); 

    this.player.nativeElement.src = this.tracks[0];
    this.player.nativeElement.load();
    this.activeSong = this.tracks[0];
    this.isPlaying = false;
  }

  playTrack(track: ITrack): void {
    console.log(this.player)
    this.durationTime = undefined;
    this.audio.pause();

    this.player.nativeElement.src = track.srcPath;
    this.player.nativeElement.load();
    this.player.nativeElement.play();
    this.activeSong = track;
    this.isPlaying = true;
  }

  onTimeUpdate() {

    // Set song duration time
    if (!this.durationTime) {
      this.setSongDuration();
    }

    // Emit converted audio currenttime in user friendly ex. 01:15
    const currentMinutes = this.generateMinutes(this.player.nativeElement.currentTime);
    const currentSeconds = this.generateSeconds(this.player.nativeElement.currentTime);
    this.currentTime$.next(this.generateTimeToDisplay(currentMinutes, currentSeconds));


    // Emit amount of song played percents
    const percents = this.generatePercentage(this.player.nativeElement.currentTime, this.player.nativeElement.duration);
    if (!isNaN(percents)) {
      this.currentProgress$.next(percents);
    }

  }

  // Play song that comes after active song
  playNextSong(): void {
    const nextSongIndex = this.tracks.findIndex((song) => song.id === this.activeSong.id + 1);

    if (nextSongIndex === -1) {
      this.playTrack(this.tracks[0]);
    } else {
      this.playTrack(this.tracks[nextSongIndex]);
    }
  }

  // Play song that comes before active song
  playPreviousSong(): void {
    const prevSongIndex = this.tracks.findIndex((song) => song.id === this.activeSong.id - 1);
    if (prevSongIndex === -1) {
      this.playTrack(this.tracks[this.tracks.length - 1]);
    } else {
      this.playTrack(this.tracks[prevSongIndex]);
    }
  }

  // Calculate song duration and set it to user friendly format, ex. 01:15
  setSongDuration(): void {
    const durationInMinutes = this.generateMinutes(this.player.nativeElement.duration);
    const durationInSeconds = this.generateSeconds(this.player.nativeElement.duration);

    if (!isNaN(this.player.nativeElement.duration)) {
      this.durationTime = this.generateTimeToDisplay(durationInMinutes, durationInSeconds);
    }
  }

  // Generate minutes from audio time
  generateMinutes(currentTime: number): number {
    return Math.floor(currentTime / 60);
  }

  // Generate seconds from audio time
  generateSeconds(currentTime: number): number | string {
    const secsFormula = Math.floor(currentTime % 60);
    return secsFormula < 10 ? '0' + String(secsFormula) : secsFormula;
  }

  generateTimeToDisplay(currentMinutes: number, currentSeconds: string | number): string {
    return `${currentMinutes}:${currentSeconds}`;
  }

  // Generate percentage of current song
  generatePercentage(currentTime: number, duration: number): number {
    return Math.round((currentTime / duration) * 100);
  }

  onPause(): void {
    this.isPlaying = false;
    this.currentProgress$.next(0);
    this.currentTime$.next('0:00');
    this.durationTime = undefined;
  }

  getListOfSongs(): ITrack[] {
    return [
      {
        id: 1,
        title: 'Evanescence-Bring Me To Life(with lyrics).mp3',
        artwork: 'https://cdn5.beatstars.com/eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvMjAxMDIxL2ltYWdlL0s2UWx0SGZQVTdGZC9odW1ibGVqcGVnLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJmaWxsIiwid2lkdGgiOjE2MCwiaGVpZ2h0IjoxNjB9fX0=?t=1638285052319',
        bpm: '88',
        collaborator: '',
        genre: 'Hip-Hop',
        key: '',
        srcPath: '/src/assets/audio.mp3',
        likes: 0,
        plays: 0,
        price: 45.22,
        releaseDate: new Date,
        subgenre: '',
        user: 'Roger'
      }
    ];
  }
}
