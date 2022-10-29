import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-product',
  styleUrls: ['./add-product.component.scss'],
  templateUrl: './add-product.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddProductComponent {
  readonly addProduct: FormGroup = new FormGroup({ title: new FormControl(), price: new FormControl(), description: new FormControl() });

  constructor(private _productService: ProductService, private _router: Router) {
  }

  onAddProductSubmitted(addProduct: FormGroup): void { this._productService.create({
  title: addProduct.get('title')?.value,
  price: addProduct.get('price')?.value,
  image: '',
  description: addProduct.get('description')?.value,
  category: ''
  }).subscribe(() => this._router.navigateByUrl('/products'))
  }
}
