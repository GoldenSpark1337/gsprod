import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { SwiperComponent, SwiperDirective } from 'ngx-swiper-wrapper';

@Component({
  selector: 'gs-swiper-list-title',
  templateUrl: './swiper-list-title.component.html',
  styleUrls: ['./swiper-list-title.component.css']
})
export class SwiperListTitleComponent implements OnInit {
  @ViewChild(SwiperComponent) swiper!: SwiperComponent;
  @ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;
  
  constructor() { }

  ngOnInit(): void {
  }

  swipePrev() {
    console.log("Prev from swiper list title");
    this.directiveRef.prevSlide();
  }

  swipeNext() {
    console.log("Next from swiper list title");
    this.directiveRef.nextSlide();
    // this.swiper.swiperRef.slideNext();
  }
}
