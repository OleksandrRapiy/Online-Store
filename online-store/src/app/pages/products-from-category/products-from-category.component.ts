import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product/product.service';
import { Product } from 'src/app/models/products/product';
import { ProductByCategory } from 'src/app/models/products/product-by-category';

@Component({
  selector: 'app-products-from-category',
  templateUrl: './products-from-category.component.html',
  styleUrls: ['./products-from-category.component.scss']
})
export class ProductsFromCategoryComponent implements OnInit {

  products: ProductByCategory[] = []
  categoryName: string;


  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params.id) {
        this.getProductByCategory(params.id);
      }
    })
  }

  getProductByCategory(id: number) {
    this.productService.getByCategoryId(id).subscribe((products: ProductByCategory[]) => {
      this.products = products;
      
      if (this.products.length > 0) {
        const firstItemIndex = 0;
        this.categoryName = this.products[firstItemIndex].categoryName;
      }
    })
  }

}
