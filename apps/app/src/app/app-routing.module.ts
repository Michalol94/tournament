import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CategoryProductsComponent } from './components/category-products/category-products.component';
import { ProductsSortedByLowComponent } from './components/products-sorted-by-low/products-sorted-by-low.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { AddProductComponentModule } from './components/add-product/add-product.component-module';
import { ProductDetailsComponentModule } from './components/product-details/product-details.component-module';
import { CategoryProductsComponentModule } from './components/category-products/category-products.component-module';
import { ProductsSortedByLowComponentModule } from './components/products-sorted-by-low/products-sorted-by-low.component-module';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: ':category/products', component: CategoryProductsComponent },
  { path: 'products-sorted-by-low', component: ProductsSortedByLowComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes), ProductListComponentModule, ProductServiceModule, AddProductComponentModule, ProductDetailsComponentModule, CategoryProductsComponentModule, ProductsSortedByLowComponentModule],
  providers: [],
  declarations: [],
  exports: []
})
export class AppRoutingModule {
}
