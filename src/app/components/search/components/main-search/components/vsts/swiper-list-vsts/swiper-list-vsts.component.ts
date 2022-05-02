import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { IVst } from 'src/app/shared/models/vst';
import { VstService } from 'src/app/shared/services/vst.service';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { SwiperOptionsService } from '../../../services/swiper-options.service';
import SwiperCore, { Navigation, A11y } from 'swiper';

SwiperCore.use([Navigation, A11y]);

@Component({
  selector: 'gs-swiper-list-vsts',
  templateUrl: './swiper-list-vsts.component.html',
  styleUrls: ['./swiper-list-vsts.component.css']
})
export class SwiperListVstsComponent implements OnInit, AfterViewInit {
  vsts$: Observable<IVst[]>;
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
  constructor(private vstService: VstService, private swiperOptions: SwiperOptionsService) { }

  ngOnInit(): void {
    this.vsts$ = this.vstService.getVsts();
  }

  ngAfterViewInit(): void {
    console.log(this.swiper)
    this.swiperOptions.loadComponentRef(this.swiper);
    //Swiper instance will be displayed in console
  }
}
