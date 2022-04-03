import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IVst } from 'src/app/shared/models/vst';
import { VstService } from 'src/app/shared/services/vst.service';

@Component({
  selector: 'gs-swiper-list-vsts',
  templateUrl: './swiper-list-vsts.component.html',
  styleUrls: ['./swiper-list-vsts.component.css']
})
export class SwiperListVstsComponent implements OnInit {
  vsts$: Observable<IVst[]>;

  constructor(private vstService: VstService) { }

  ngOnInit(): void {
    this.vsts$ = this.vstService.getVsts();
  }

}
