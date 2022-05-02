import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// import { SwiperDirective } from 'ngx-swiper-wrapper';
import Swiper, {SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
// import { NavigationOptions } from 'swiper/types/components/navigation';
// import { PaginationOptions } from 'swiper/types/components/pagination';
// import { ScrollbarOptions } from 'swiper/types/components/scrollbar';
import { SwiperOptionsService } from '../../../../services/swiper-options.service';
import SwiperCore, { Navigation, Scrollbar, A11y, Keyboard, Pagination } from 'swiper';

SwiperCore.use([Navigation, A11y, Keyboard]);

@Component({
  selector: 'gs-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class AppSwiperComponent implements OnInit, AfterViewInit {
  public show: boolean = true;
  public type: string = 'component';

 

  // private navigation: NavigationOptions = {
  //   prevEl: 'btn-prev-tracks',
  //   nextEl: 'btn-next-tracks'
  // };

  // private scrollbar: ScrollbarOptions = {
  //   el: '.swiper-scrollbar',
  //   hide: false,
  //   draggable: true
  // };

  // private pagination: PaginationOptions = {
  //   el: '.swiper-pagination',
  //   clickable: true,
  //   hideOnClick: false
  // };

  @ViewChild('swiper', { static: false }) swiper: SwiperComponent;
  // @ViewChild(SwiperDirective) swiperDirective: SwiperDirective;

  constructor(private swiperOptions: SwiperOptionsService) {
    
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.swiperOptions.loadComponentRef(this.swiper);
    //Swiper instance will be displayed in console
  }

  // public toggleOverlayControls(): void {
  //   if (this.config.navigation) {
  //     this.config.scrollbar = false;
  //     this.config.navigation = false;

  //     this.config.pagination = this.pagination;
  //   } else if (this.config.pagination) {
  //     this.config.navigation = false;
  //     this.config.pagination = false;

  //     this.config.scrollbar = this.scrollbar;
  //   } else {
  //     this.config.scrollbar = false;
  //     this.config.pagination = false;

  //     this.config.navigation = true;
  //   }

  //   if (this.type === 'directive' && this.swiperDirective) {
  //     this.swiperDirective.setIndex(0);
  //   } else if (this.type === 'component' && this.swiper && this.swiper) {
  //     this.swiper.allowSlideNext = true;
  //   }
  // }

  // public toggleKeyboardControl(): void {
  //   this.config.keyboard = !this.config.keyboard;
  // }

  // public toggleMouseWheelControl(): void {
  //   this.config.mousewheel = !this.config.mousewheel;
  // }

  public onIndexChange(index: number): void {
    console.log('Swiper index: ', index);
  }

  public onSwiperEvent(event: string): void {
    console.log('Swiper event: ', event);
  }
}
