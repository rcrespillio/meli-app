import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/shared/products.service';
import ProductsList, { Product } from 'src/app/shared/models/productsList';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  products: Product[]
  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(({ search = '' }) => {
      this.searchProducts(search);
    });
  }

  ngOnDestroy(){
    this.subscriptions.forEach( sub => sub.unsubscribe());
  }

  searchProducts( query: string ){
    this.subscriptions = [
      ...this.subscriptions,
      this.productsService.getProductsList(query).subscribe(
        (data: ProductsList) => {
          this.products = data.items;
        },
        (error) => {

        }
      )
    ]
  }

}
