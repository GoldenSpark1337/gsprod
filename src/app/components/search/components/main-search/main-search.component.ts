import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/shared/services/shop.service';

@Component({
  selector: 'gs-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.css']
})
export class MainSearchComponent implements OnInit {

  constructor(products: ShopService) { }

  ngOnInit(): void {
  }

}
