import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, map} from "rxjs";
import {ProductModel} from "../models/product.model";
import {CategoryModel} from "../models/category.model";

@Injectable()
export class ProductService {

  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>('https://fakestoreapi.com/products')
  }

  create(product: Omit<ProductModel, 'id'>) {
    return this._httpClient.post('https://fakestoreapi.com/products', product)
  }

  getAllCategories(): Observable<string> {
    return this._httpClient.get<string>('https://fakestoreapi.com/products/categories')
  }

  getOne(id: string): Observable<ProductModel> {
    return this._httpClient.get<ProductModel>('https://fakestoreapi.com/products/' + id)
  }

  delete(id: number): Observable<ProductModel> {
    return this._httpClient.delete<ProductModel>('https://fakestoreapi.com/products/' + id)
  }

  getAllbyLow(): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>('https://fakestoreapi.com/products').pipe(map((product: ProductModel[]) => {
        return product.sort((a: any, b: any) => a.price - b.price)
      }
    ))
  }

  getAllbyHigh(): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>('https://fakestoreapi.com/products').pipe(map((product: ProductModel[]) => {
        return product.sort((a: any, b: any) => b.price - a.price)
      }
    ))
  }
}
