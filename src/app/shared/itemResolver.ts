import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { ProductList } from './models/productsList';
import { ProductsService } from './products.service';
import { Observable, of } from 'rxjs';
import {Title} from "@angular/platform-browser";
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProductResolver implements Resolve<ProductList> {
  constructor(private service: ProductsService, private titleService:Title) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.service.getProduct(route.paramMap.get('id'));
    /*.pipe(
      map(data => {
        console.log(data.item.title)
        this.titleService.setTitle(data.item.title);
        return of(data);
      })
    )*/
  }
}
