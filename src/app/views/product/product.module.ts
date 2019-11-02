import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { MetaModule, MetaStaticLoader } from '@ngx-meta/core';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,MetaModule.forRoot()
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductModule { }
