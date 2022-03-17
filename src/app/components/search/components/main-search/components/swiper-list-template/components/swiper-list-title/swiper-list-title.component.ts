import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'gs-swiper-list-title',
  templateUrl: './swiper-list-title.component.html',
  styleUrls: ['./swiper-list-title.component.css']
})
export class SwiperListTitleComponent implements OnInit {
  @ViewChild(SwiperComponent) swiper!: SwiperComponent;
  constructor() { }

  ngOnInit(): void {
  }

  swipePrev() {
    console.log("Prev from swiper list title");
    // this.swiper.swiperRef.slidePrev();
  }

  swipeNext() {
    console.log("Next from swiper list title");
    // this.swiper.swiperRef.slideNext();
  }
}
