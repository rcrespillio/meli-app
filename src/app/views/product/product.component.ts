import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/shared/products.service';
import { Product, ProductList } from 'src/app/shared/models/productsList';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  product: Product;
  breadcrumb = '';
  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService, private router: Router) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    if(id){
      this.getProduct(id);
    }
  }

  ngOnDestroy(){
    this.subscriptions.forEach( sub => sub.unsubscribe());
  }

  getProduct(id: string){
    this.subscriptions = [
      ...this.subscriptions,
      this.productsService.getProduct(id).subscribe(
        (data: ProductList) => {
          this.product = data.item;
        },
        (error) => {

        }
      )
    ]
  }

  goToProduct(id: string){
    this.router.navigate([`/items/${id}`]);
  }

}
