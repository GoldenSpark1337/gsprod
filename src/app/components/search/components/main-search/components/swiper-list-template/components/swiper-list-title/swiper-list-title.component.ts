import { Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { SwiperOptionsService } from '../../../../services/swiper-options.service';

@Component({
  selector: 'gs-swiper-list-title',
  templateUrl: './swiper-list-title.component.html',
  styleUrls: ['./swiper-list-title.component.css']
})
export class SwiperListTitleComponent implements OnInit {
  @Input() productType: any;
  swiper!: SwiperComponent;
  
  constructor(private swiperOptions: SwiperOptionsService) 
  {
    
  }

  ngOnInit(): void {
    this.swiperOptions.getComponentRef().subscribe(res => this.swiper = res);
  }

  swipePrev() {
    console.log("Prev from swiper list title");
    this.swiper.swiperRef.slidePrev();
  }

  swipeNext() {
    console.log("Next from swiper list title");
    console.log(this.swiper)
    this.swiper.swiperRef.slideNext();
    // this.swiper.swiperRef.slideNext();
  }
}
