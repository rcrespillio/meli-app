import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { take, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import ProductsList from './models/productsList';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private endpoints = {
    products: `${environment.baseUrl}/api/items`
  }

  constructor(private http: HttpClient) { }

  getProductsList(query){
    return this.http.get<ProductsList>(`${this.endpoints.products}`, { params: { q: query }}).pipe(
      take(1),
      catchError((errorResponse: HttpErrorResponse) => {
        return throwError(errorResponse.error);
      })
    );
  }

}
