import { Component, Input, OnInit } from '@angular/core';
import { ICategoryResponse } from 'src/app/models/categories/category-response';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {

  @Input() category: ICategoryResponse;

  constructor() { }

  ngOnInit(): void {
  }

}
