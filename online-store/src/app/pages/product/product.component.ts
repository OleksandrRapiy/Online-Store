import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product/product.service';
import { Product } from 'src/app/models/products/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: Product = new Product();

  selectedImage: string = '';

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = params.id;

      this.productService.getById(productId).subscribe((product: Product) => {
        this.product = product;
        
        this.product.image = '../../../assets/images/products/' + this.product.image;

        this.selectedImage = product.image;
      })

    })
  }

}
