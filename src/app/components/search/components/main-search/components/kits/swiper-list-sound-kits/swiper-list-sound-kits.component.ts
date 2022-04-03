import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'gs-swiper-list-sound-kits',
  templateUrl: './swiper-list-sound-kits.component.html',
  styleUrls: ['./swiper-list-sound-kits.component.css']
})
export class SwiperListSoundKitsComponent implements OnInit {
  public kits$: Observable<IProduct[]>;


  constructor(private kitsService: ProductService) { }

  ngOnInit(): void {
    this.kits$ = this.kitsService.getKits();
  }

}
