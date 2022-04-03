import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product';
import { IUser } from 'src/app/shared/models/user';
import { ShopService } from 'src/app/shared/services/shop.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'gs-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {
  public products: IProduct[] = [];
  public users: IUser[] = [];
  constructor(private shopService: ShopService, private userService: UserService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe((response: IUser[]) => {
      this.users = response;
    }, error => console.log(error));
  }

  getProducts() {
    this.shopService.getProducts().subscribe(
      (response: IProduct[]) => {
        this.products = response;
      }, 
      error => 
        console.log(error));
  }
}
