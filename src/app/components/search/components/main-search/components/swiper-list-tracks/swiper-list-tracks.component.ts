import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ITrack } from 'src/app/shared/models/track';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { SwiperOptionsService } from '../../services/swiper-options.service';
import SwiperCore, { Navigation, A11y } from 'swiper';

SwiperCore.use([Navigation, A11y]);

@Component({
  selector: 'gs-swiper-list-tracks',
  templateUrl: './swiper-list-tracks.component.html',
  styleUrls: ['./swiper-list-tracks.component.css']
})
export class SwiperListTracksComponent implements OnInit, AfterViewInit  {
  @Input() tracks: ITrack[];
  @ViewChild('swiper', { static: false }) swiper: SwiperComponent;

  public config: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 4,
    slidesPerGroup: 4,
    keyboard: true,
    scrollbar: false,
    navigation: true,
    pagination: false,
    centeredSlides: false,
    spaceBetween: 16,
    observer: true,
    observeParents: true
  };

  constructor(private swiperOptions: SwiperOptionsService) { }

  ngOnInit(): void {
    
  }
  
  ngAfterViewInit(): void {
    console.log(this.swiper.id)
    this.swiperOptions.loadComponentRef(this.swiper);
    //Swiper instance will be displayed in console
  }
}
