import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'gs-kits-edit',
  templateUrl: './kits-edit.component.html',
  styleUrls: ['./kits-edit.component.css']
})
export class KitsEditComponent implements OnInit {
  kit!: IProduct;
  kitTags: string[] = [];
  constructor(private kitsService: ProductService, private route: ActivatedRoute,) { }

  ngOnInit() {
    this.kitsService.getProduct(+this.route.snapshot.paramMap.get("id")).subscribe(
      kit => this.kit = kit
    );
  }

  addKitTags(tag: string) {
    if (!this.kitTags.includes(tag)) {
      this.kitTags.push(tag);
    }
  }
}
