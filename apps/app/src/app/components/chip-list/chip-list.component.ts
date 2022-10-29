import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../../services/product.service';
import {Observable} from "rxjs";
import {CategoryModel} from "../../models/category.model";

@Component({
  selector: 'app-chip-list',
  styleUrls: ['./chip-list.component.scss'],
  templateUrl: './chip-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChipListComponent {
  constructor(private _productService: ProductService) {
  }

  catogories$: Observable<CategoryModel[]> = this._productService.getAllCategories()
}
