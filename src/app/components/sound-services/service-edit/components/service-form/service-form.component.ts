import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'gs-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.css']
})
export class ServiceFormComponent implements OnInit {
  service!: IProduct;
  serviceTags: string[] = [];

  constructor(
    private soundService: ProductService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.soundService.getProduct(+this.route.snapshot.paramMap.get("id")).subscribe(
      service => this.service = service
    );
  }

  addServiceTags(tag: string) {
    this.serviceTags.push(tag);
  }

  getService() {

  }
}
