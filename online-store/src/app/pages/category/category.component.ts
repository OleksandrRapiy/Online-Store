import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/core/services/category/category.service';
import { ICategoryResponse } from 'src/app/models/categories/category-response';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categories: ICategoryResponse[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryService.get().subscribe((categories: ICategoryResponse[]) => {
      if (categories) {
        this.categories = categories;
      }
    })
  };
}
