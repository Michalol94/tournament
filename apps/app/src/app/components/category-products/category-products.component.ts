import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {map, Observable} from "rxjs";
import {ProductModel} from "../../models/product.model";
import {combineLatestWith} from "rxjs/operators";

@Component({
  selector: 'app-category-products',
  styleUrls: ['./category-products.component.scss'],
  templateUrl: './category-products.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryProductsComponent {
  constructor(private _activatedRoute: ActivatedRoute, private _productService: ProductService) {
  }

  readonly categoryProducts$: Observable<ProductModel[]> = this._productService.getAll().pipe(combineLatestWith(this._activatedRoute.params),
    map(([products, params]) => products.filter((product) => product.category === params['category']))
  )
}
