import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, ProductList } from 'src/app/shared/models/productsList';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  product: Product;
  breadcrumb = '';
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private readonly meta: MetaService) {
    const data = this.activatedRoute.snapshot.data['product'];
    this.setProduct(data);
    //this.meta.setTitle(data.item.title)
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.subscriptions.forEach( sub => sub.unsubscribe());
  }

  setProduct(data: ProductList){
    this.product = data.item;
    this.breadcrumb = data.item.categories.join(' > ');
  }
}
