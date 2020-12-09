// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

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
import { MatFormFieldModule } from '@angular/material/form-field';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ItemCardComponent,
    CategoryCardComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    CoreModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ItemCardComponent,
    CategoryCardComponent,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule
  ]
})
export class SharedModule { }
