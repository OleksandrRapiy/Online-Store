// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Own components
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { CategoryCardComponent } from './category-card/category-card.component';

// Material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ItemCardComponent,
    CategoryCardComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule, 
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ItemCardComponent,
    CategoryCardComponent
  ]
})
export class SharedModule { }
