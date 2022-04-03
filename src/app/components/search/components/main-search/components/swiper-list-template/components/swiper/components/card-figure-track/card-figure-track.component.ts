import { Component, Input, OnInit } from '@angular/core';
import { ProductStateService } from 'src/app/components/search/components/main-search/services/product-state.service';
import { ITrack } from 'src/app/shared/models/track';

@Component({
  selector: 'gs-card-figure-track',
  templateUrl: './card-figure-track.component.html',
  styleUrls: ['./card-figure-track.component.css']
})
export class CardFigureTrackComponent implements OnInit {
  @Input() track: ITrack;
  constructor(private productState: ProductStateService) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    
  }
}
