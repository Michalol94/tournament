import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ProductListComponent } from './product-list.component';
import { MatChipsModule } from '@angular/material/chips';
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, ReactiveFormsModule, MatListModule, MatChipsModule, RouterModule],
  declarations: [ProductListComponent],
  providers: [],
  exports: [ProductListComponent]
})
export class ProductListComponentModule {
}
