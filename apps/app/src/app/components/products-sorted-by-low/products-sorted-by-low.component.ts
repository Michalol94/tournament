import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable} from "rxjs";
import {ProductModel} from "../../models/product.model";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-products-sorted-by-low',
  styleUrls: ['./products-sorted-by-low.component.scss'],
  templateUrl: './products-sorted-by-low.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsSortedByLowComponent {
  constructor(private _productService: ProductService) {
  }
  readonly productsSortedByLow$: Observable<ProductModel[]> = this._productService.getAllbyLow();
}
