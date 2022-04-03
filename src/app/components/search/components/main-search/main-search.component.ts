import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITrack } from 'src/app/shared/models/track';
import { ProductService } from 'src/app/shared/services/product.service';
import { TrackService } from 'src/app/shared/services/track.service';

@Component({
  selector: 'gs-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.css']
})
export class MainSearchComponent implements OnInit {
  tracks$: Observable<ITrack[]>;

  constructor(private trackService: TrackService, private productService: ProductService) { }

  ngOnInit(): void {
    this.tracks$ = this.trackService.getTracks();
  }

}
