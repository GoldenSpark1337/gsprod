import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IUser } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { SwiperOptionsService } from '../../../services/swiper-options.service';
import SwiperCore, { Navigation, A11y } from 'swiper';

SwiperCore.use([Navigation, A11y]);

@Component({
  selector: 'gs-swiper-list-members',
  templateUrl: './swiper-list-members.component.html',
  styleUrls: ['./swiper-list-members.component.css']
})
export class SwiperListMembersComponent implements OnInit {
  public users$: Observable<IUser[]>;
  @ViewChild('swiper', { static: false }) swiper: SwiperComponent;

  public config: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 5,
    slidesPerGroup: 5,
    keyboard: true,
    scrollbar: false,
    navigation: true,
    pagination: false,
    centeredSlides: false,
    spaceBetween: 16,
    observer: true,
    observeParents: true
  };

  constructor(private userService: UserService, private swiperOptions: SwiperOptionsService) { }

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }

  ngAfterViewInit(): void {
    console.log(this.swiper)
    this.swiperOptions.loadComponentRef(this.swiper);
    //Swiper instance will be displayed in console
  }
}
