import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product';
import { ShopService } from 'src/app/shared/services/shop.service';

@Component({
  selector: 'gs-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {
  public products: IProduct[] = [];
  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.shopService.getProducts().subscribe(
      (response: IProduct[]) => {
        this.products = response;
      }, 
      error => 
        console.log(error));
  }

}
