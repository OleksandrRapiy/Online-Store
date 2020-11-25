import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/core/services/category/category.service';
import { ICategoryRequest } from 'src/app/models/categories/category-request';
import { ICategoryResponse } from 'src/app/models/categories/category-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories: ICategoryResponse[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getAllCategories();
  }


  getAllCategories() {
    this.categoryService.get().subscribe((categories: ICategoryResponse[]) => {
      if (categories) {
        this.categories = categories.filter((el, i) => i >= categories.length / 2);
      }
    })
  };

}
