import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'gs-wrapper-member-soundkit-content',
  templateUrl: './wrapper-member-soundkit-content.component.html',
  styleUrls: ['./wrapper-member-soundkit-content.component.css']
})
export class WrapperMemberSoundkitContentComponent implements OnInit {
  kit: IProduct;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadKit();
  }

  loadKit() {
    this.productService.getProduct(+this.route.snapshot.paramMap.get("id")).subscribe(kit => {
      this.kit = kit;
    }, error => console.log(error)
    );
  }
}
