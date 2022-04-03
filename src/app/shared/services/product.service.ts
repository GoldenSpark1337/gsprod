import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IPagination } from '../models/pagination';
import { IProduct } from '../models/product';
import { ProductParams } from '../models/productParams';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = environment.apiUrl + "products/";
  public products: IProduct[] = [];
  public services: IProduct[] = [];
  public kits: IProduct[] = [];
  productParams = new ProductParams();

  constructor(private http: HttpClient) { }

  getProducts(productParams: ProductParams) {
    let params = new HttpParams();

    params.append("Category", productParams.category);
    params.append("pageIndex", productParams.pageIndex.toString());
    params.append("pageIndex", productParams.pageSize.toString());

    if (this.products.length > 0) return of(this.products, {observe: 'response', params}); 
    return this.http.get<IPagination>(this.baseUrl, {observe: 'response', params}).pipe(
      map((products) => {
        return products.body;
      })
    );
  }

  getProduct(id: number) {
    const product = this.products.find(x => x.id === id);
    if (product !== undefined) return of(product);
    return this.http.get<IProduct>(this.baseUrl + `${id}`);
  }

  getServices() {
    if (this.services.length > 0) return of(this.services); 
    return this.http.get<IPagination>(this.baseUrl + "services").pipe(
      map((services: IPagination) => {
        this.services = services.data;
        return services.data;
      })
    );
  }

  getKits() {
    if (this.kits.length > 0) return of(this.kits); 
    return this.http.get<IProduct[]>(this.baseUrl + "kits").pipe(
      map((kits: IProduct[]) => {
        this.kits = kits;
        return kits;
      }, error => {
        console.log(error)
      })
    );
  }

  updateProduct(product: IProduct) {
    return this.http.put(this.baseUrl, product).pipe(
      map(() => {
        const index = this.products.indexOf(product);
        this.products[index] = product;
      })
    );
  }
}
