import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import {Product} from './../../models/product.model';

import {environment} from './../../../../environments/environment';
import {Observable, throwError} from 'rxjs';
import {resourceChangeTicket} from '@angular/compiler-cli/src/ngtsc/core';
import {catchError, map} from 'rxjs/operators';
import {error} from '@angular/compiler/src/util';

interface User {
  email: string;
  gender: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) {
  }

  getAllProducts() {
    return this.http.get<Product[]>(`${environment.url_api}/products`);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${environment.url_api}/products/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post(`${environment.url_api}/products`, product);
  }

  updateProduct(id: string, changes: Partial<Product>) {
    return this.http.put(`${environment.url_api}/products/${id}`, changes);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${environment.url_api}/products/${id}`);
  }

  getRandomUsers(): Observable<User[]> {
    return this.http.get('https://randomuser.me/api/?results=2')
      .pipe(
        catchError(err => {
          throw new Error('salio mal');
        }),
        map((response: any) => response.results as User[])
      );
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err);
    throw new Error('peticion salió mal');
  }
}
