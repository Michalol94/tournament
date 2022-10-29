import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {switchMap} from "rxjs/operators";
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-product-details',
  styleUrls: ['./product-details.component.scss'],
  templateUrl: './product-details.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent {
  constructor(private _productService: ProductService, private _activatedRoute: ActivatedRoute) {
  }

  readonly productDetails$: Observable<ProductModel> = this._activatedRoute.params.pipe(
    switchMap((params) => this._productService.getOne(params['id'])))
}
