import { Component, OnInit } from '@angular/core';
import { SwiperOptionsService } from 'src/app/components/search/components/main-search/services/swiper-options.service';

@Component({
  selector: 'gs-swiper-controllers',
  templateUrl: './swiper-controllers.component.html',
  styleUrls: ['./swiper-controllers.component.css']
})
export class SwiperControllersComponent implements OnInit {

  constructor(private swiperOptions: SwiperOptionsService) { }

  ngOnInit(): void {
    this.swiperOptions.getComponentRef().subscribe(res => console.log());
  }

}
