import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ITrack } from 'src/app/shared/models/track';
import { SwiperComponent, SwiperDirective } from 'ngx-swiper-wrapper';

@Component({
  selector: 'gs-swiper-list-tracks',
  templateUrl: './swiper-list-tracks.component.html',
  styleUrls: ['./swiper-list-tracks.component.css']
})
export class SwiperListTracksComponent implements OnInit {
  @Input() tracks: ITrack[];

  @ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;
  @ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;

  constructor() { }

  ngOnInit(): void {
    
  }
  
}
