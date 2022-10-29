import { NgModule } from '@angular/core';
import { ProductsSortedByLowComponent } from './products-sorted-by-low.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule],
  declarations: [ProductsSortedByLowComponent],
  providers: [],
  exports: [ProductsSortedByLowComponent]
})
export class ProductsSortedByLowComponentModule {
}
