import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './products/products.component';
import { BasketComponent } from './basket/basket.component';
import { CategoryComponent } from './category/category.component';
import { ProductsFromCategoryComponent } from './products-from-category/products-from-category.component';
import { LoginComponent } from './login/login.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    BasketComponent,
    CategoryComponent,
    ProductsFromCategoryComponent,
    LoginComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class PagesModule { }
