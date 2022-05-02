import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { SwiperOptionsService } from '../../../services/swiper-options.service';
import SwiperCore, { Navigation, A11y } from 'swiper';

SwiperCore.use([Navigation, A11y]);

@Component({
  selector: 'gs-swiper-list-sound-kits',
  templateUrl: './swiper-list-sound-kits.component.html',
  styleUrls: ['./swiper-list-sound-kits.component.css']
})
export class SwiperListSoundKitsComponent implements OnInit, AfterViewInit {
  public kits$: Observable<IProduct[]>;
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

  constructor(private kitsService: ProductService, private swiperOptions: SwiperOptionsService) { }

  ngOnInit(): void {
    this.kits$ = this.kitsService.getKits();
  }

  ngAfterViewInit(): void {
    console.log(this.swiper)
    this.swiperOptions.loadComponentRef(this.swiper);
    //Swiper instance will be displayed in console
  }
}
