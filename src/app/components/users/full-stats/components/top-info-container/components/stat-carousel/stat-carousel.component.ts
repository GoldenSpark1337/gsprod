import { Component, OnInit, ViewChild } from '@angular/core';
import SwiperCore, { Swiper, SwiperOptions, Virtual, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { SwiperComponent } from "swiper/angular";

// install Swiper modules
SwiperCore.use([Virtual, Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'gs-stat-carousel',
  templateUrl: './stat-carousel.component.html',
  styleUrls: ['./stat-carousel.component.css']
})
export class StatCarouselComponent implements OnInit {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  public config: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    keyboard: true,
    scrollbar: false,
    navigation: true,
    pagination: false,
    centeredSlides: false,
    spaceBetween: 17,
    observer: true,
    observeParents: true
  };

  constructor() { }

  ngOnInit() {
  }

  nextSlide() {
    console.log(this.swiper.swiperRef)
    this.swiper.swiperRef.slideNext();
  }
}
