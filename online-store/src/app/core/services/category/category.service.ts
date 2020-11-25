import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategoryRequest } from 'src/app/models/categories/category-request';
import { ICategoryResponse } from 'src/app/models/categories/category-response';
import { environment } from 'src/environments/environment';
import { CrudService } from '../crud/crud.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends CrudService<ICategoryRequest, ICategoryResponse>  {

  private static readonly API_URL: string = environment.domain + '/api/category';

  constructor(protected http: HttpClient) {
    super(CategoryService.API_URL, http)
   }
}
