import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './product/product.component';
import { BasketComponent } from './basket/basket.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProductComponent,
    BasketComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PagesModule { }
