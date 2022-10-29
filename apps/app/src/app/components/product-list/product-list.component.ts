import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import {CategoryModel} from "../../models/category.model";

@Component({
  selector: 'app-product-list',
  styleUrls: ['./product-list.component.scss'],
  templateUrl: './product-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  readonly products$: Observable<ProductModel[]> = this._productService.getAll();

  readonly productsSortedByLow$: Observable<ProductModel[]> = this._productService.getAllbyLow();
  readonly productsSortedByHigh$: Observable<ProductModel[]> = this._productService.getAllbyHigh();

  readonly categories$: Observable<string> = this._productService.getAllCategories()

  onProductDeleteClicked(id:number) :void {
    this._productService.delete(id).subscribe()
  }

  constructor(private _productService: ProductService) {
  }
}
