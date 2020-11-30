import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/core/services/category/category.service';
import { ProductService } from 'src/app/core/services/product/product.service';
import { ICategoryRequest } from 'src/app/models/categories/category-request';
import { ICategoryResponse } from 'src/app/models/categories/category-response';
import { IProduct } from 'src/app/models/products/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories: ICategoryResponse[];
  products: IProduct[];

  constructor(private categoryService: CategoryService, private productService: ProductService) { }

  ngOnInit(): void {
    this.getAllCategories();
    this.getAllProducts();
  }


  getAllCategories() {
    this.categoryService.get().subscribe((categories: ICategoryResponse[]) => {
      if (categories) {
        this.categories = categories.filter((el, i) => i >= categories.length / 2);
      }
    })
  };

  getAllProducts() {
    this.productService.get().subscribe((products: IProduct[]) => {
      if(products) {
       this.products = products
      }
    })
  }

}
