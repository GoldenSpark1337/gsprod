import { Injectable } from '@angular/core';
// import { SwiperComponent, SwiperDirective } from 'ngx-swiper-wrapper';
import { ReplaySubject } from 'rxjs';
import { SwiperComponent } from 'swiper/angular';

@Injectable({
  providedIn: 'root'
})
export class SwiperOptionsService {
private componentRef = new ReplaySubject<SwiperComponent>();

constructor() { }

loadComponentRef(sender: SwiperComponent) {
  this.componentRef.next(sender);
}

getComponentRef() {
  return this.componentRef.asObservable();
}

// loadDirectiveRef(sender: SwiperDirective) {
//   this.directiveRef.next(sender);
// }

// getDirectiveRef() {
//   return this.directiveRef.asObservable();
// }

}
