import { ElementRef, Injectable, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ITrack } from 'src/app/shared/models/track';
import { TrackService } from 'src/app/shared/services/track.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService implements OnInit{
  currentProgress$ = new BehaviorSubject(0);
  currentTime$ = new Subject();
  isLoop$ = new BehaviorSubject(false);

  private isPlaying = new BehaviorSubject(false);
  isPlaying$ = this.isPlaying.asObservable();

  player!: HTMLAudioElement;

  tracks: ITrack[] = [];
  activeSong: any;
  durationTime?: string;
  constructor() { }

  ngOnInit(): void {
    this.isPlaying.next(false);
    this.player.load();
    this.onTimeUpdate();
  }

  loadPlayer(player: any) {
    this.player = player.nativeElement;
    this.player.addEventListener("loadeddata", function() {
      });
  }

  playTrack(): void {
    //Avoid the Promise Error
    setTimeout(function () {      
      this.player.play();
    }, 150);
    this.isPlaying.next(true);
  }

  onPause(): void {
    if (!this.player.paused) {
      this.player.pause();
    }
    this.isPlaying.next(false);
  }

  onStop() {
    this.player.pause();
    this.player.currentTime = 0;
    this.isPlaying.next(false);
    this.currentProgress$.next(0);
    this.currentTime$.next('0:00');
    this.durationTime = undefined;
  }

  setVolume(value: number) {
    this.player.volume = value;
  }

  // Play song that comes after active song
  playNextSong(): void {
    const nextSongIndex = this.tracks.findIndex((song) => song.id === this.activeSong.id + 1);

    if (nextSongIndex === -1) {
      this.playTrack();
    } else {
      this.playTrack();
    }
  }

  // Play song that comes before active song
  playPreviousSong(): void {
    const prevSongIndex = this.tracks.findIndex((song) => song.id === this.activeSong.id - 1);
    if (prevSongIndex === -1) {
      this.playTrack();
    } else {
      this.playTrack();
    }
  }

  repeatTrack(value: boolean) {
    this.player.loop = value;
    this.isLoop$.next(value);
  }

  onTimeUpdate() {
    // Set song duration time
    if (!this.durationTime) {
      console.log("durationFuckingshitjavascriotDie")
      this.setSongDuration();
    }

    console.log(this.player.currentTime)
    console.log(this.player.duration)

    // Emit converted audio currenttime in user friendly ex. 01:15
    const currentMinutes = this.generateMinutes(this.player.currentTime);
    const currentSeconds = this.generateSeconds(this.player.currentTime);
    this.currentTime$.next(this.generateTimeToDisplay(currentMinutes, currentSeconds));


    // Emit amount of song played percents
    const percents = this.generatePercentage(this.player.currentTime, this.player.duration);
    if (!isNaN(percents)) {
      this.currentProgress$.next(percents);
    }

  }

  // Calculate song duration and set it to user friendly format, ex. 01:15
  setSongDuration(): void {
    this.player.duration;
    console.log(this.player.duration)
    console.log(this.player.currentTime)
    const durationInMinutes = this.generateMinutes(this.player.duration);
    const durationInSeconds = this.generateSeconds(this.player.duration);

    if (!isNaN(this.player.duration)) {
      this.durationTime = this.generateTimeToDisplay(durationInMinutes, durationInSeconds);
      console.log(this.player.duration)
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

  getListOfSongs(): any[] {
    return [
      {
        id: 1,
        title: 'Evanescence-Bring Me To Life(with lyrics).mp3',
        image: 'https://cdn5.beatstars.com/eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvMjAxMDIxL2ltYWdlL0s2UWx0SGZQVTdGZC9odW1ibGVqcGVnLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJmaWxsIiwid2lkdGgiOjE2MCwiaGVpZ2h0IjoxNjB9fX0=?t=1638285052319',
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
