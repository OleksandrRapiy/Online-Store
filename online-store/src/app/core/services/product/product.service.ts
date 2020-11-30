import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/models/products/product';
import { environment } from 'src/environments/environment';
import { CrudService } from '../crud/crud.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends CrudService<IProduct, IProduct> {

  private static readonly API_URL: string = environment.domain + '/api/product';

  constructor(protected http: HttpClient) {
    super(ProductService.API_URL, http);
  }
}
