import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/products/product';
import { ProductByCategory } from 'src/app/models/products/product-by-category';
import { environment } from 'src/environments/environment';
import { CrudService } from '../crud/crud.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends CrudService<Product, Product> {

  private static readonly API_URL: string = environment.domain + '/api/product';
  private static readonly API_URL_BY_CATEGORY: string = environment.domain + '/api/product/by-category';

  constructor(protected http: HttpClient) {
    super(ProductService.API_URL, http);
  }
  
  getByCategoryId(id: number): Observable<ProductByCategory[]> {
    return this.http.get<ProductByCategory[]>(`${ProductService.API_URL_BY_CATEGORY}/${id}`)
  }
}
